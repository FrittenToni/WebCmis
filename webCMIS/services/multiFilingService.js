webCmis.services.multiFilingService = (function (log, request) {

    // TODO: implement
    function addObjectToFolder(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("multiFilingService: addObjectToFolder called with rootFolderUrl: " + rootFolderUrl);
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
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }
    // TODO: implement
    function removeObjectFromFolder(rootFolderUrl, objectId, filter, depth, includeAllowableActions, includeRelationships, renditionFilter, includePathSegment, succinct, doneCb, failCb) {
        log.info("multiFilingService: removeObjectFromFolder called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "descendants",
            objectId: objectId,
            filter: filter,
            depth: depth,
            renditionFilter: renditionFilter,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    return {
        addObjectToFolder: addObjectToFolder,
        removeObjectFromFolder: removeObjectFromFolder
    };

}(webCmis.util.logger.getLogger(), webCmis.util.request));