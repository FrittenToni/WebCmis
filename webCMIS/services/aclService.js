webCmis.services.AclService = (function (log, request) {

    function AclService(sessionParameters) {
        log.debug('AclService created with session parameters: ' + JSON.stringify(sessionParameters));
        this.getSessionParameters = function () {
            return sessionParameters;
        };
    }

    AclService.prototype.applyAcl = function(objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,

            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(this.getSessionParameters(), 'GET', data, doneCb, failCb);
    };
    function applyAcl(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {

    }

    function getAcl(rootFolderUrl, objectId, filter, depth, includeAllowableActions, includeRelationships, renditionFilter, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "descendants",
            objectId: objectId,
            filter: filter,
            depth: depth,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    return {
        applyAcl: applyAcl,
        getAcl: getAcl
    };

}(webCmis.util.logger.getLogger(), webCmis.util.request));