webCmis.services.versioningService = (function (log, request) {

    function checkOut(rootFolderUrl, objectId, succinct, doneCb, failCb) {
        log.info("versioningService: checkOut called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "checkOut",
            objectId: objectId,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function cancelCheckOut(rootFolderUrl, objectId, doneCb, failCb) {
        log.info("versioningService: cancelCheckOut called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "cancelCheckOut",
            objectId: objectId
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    // TODO: implement
    function checkIn(rootFolderUrl, objectId, filter, depth, includeAllowableActions, includeRelationships, renditionFilter, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "checkIn",
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

    // TODO: implement
    function getObjectOfLatestVersion(rootFolderUrl, objectId, filter, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
//        Service: getObjectOfLatestVersion
//        HTTP method: GET
//        Argument
//        cmisselector:
//            assertObject
//        Arguments:
//            • filter
//• includeRelationships
//• includePolicyIds
//• renditionFilter
//• includeACL
//• includeAllowableActions
//• returnVersion
//– If no value is present or the value is 'this', getObject MUST be
//        called.
//– If the value is 'latest' getObjectOfLatestVersion MUST be
//        called with the parameter major set to FALSE.
//– If the value is 'latestmajor' getObjectOfLatestVersion MUST
//        be called with the parameter major set to TRUE.
//• succinct

        var data = {
            cmisSelector: "parent",
            objectId: objectId,
            filter: filter,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    // TODO: implement
    function getPropertiesOfLatestVersion(rootFolderUrl, objectId, filter, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
//        Service: getPropertiesOfLatestVersion
//        HTTP method: GET
//        Argument
//        cmisselector:
//            properties
//        Arguments:
//            • filter
//• returnVersion
//– If no value is present or the value is 'this', getProperties MUST
//        be called.
//– If the value is 'latest' getPropertiesOfLatestVersion MUST
//        be called with the parameter major set to FALSE.
//– If the value is 'latestmajor' getPropertiesOfLatestVersion
//        MUST be called with the parameter major set to TRUE.
//• succinct
//• token

        var data = {
            cmisSelector: "parent",
            objectId: objectId,
            filter: filter,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function getAllVersions(rootFolderUrl, objectId, filter, includeAllowableActions, succinct, doneCb, failCb) {
        log.info("versioningService: getAllVersions called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "versions",
            objectId: objectId,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    return {
        checkOut: checkOut,
        cancelCheckOut: cancelCheckOut,
        checkIn: checkIn,
        getObjectOfLatestVersion: getObjectOfLatestVersion,
        getPropertiesOfLatestVersion: getPropertiesOfLatestVersion,
        getAllVersions: getAllVersions
    };

}(webCmis.util.logger.getLogger(), webCmis.util.request));