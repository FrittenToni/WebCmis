webCmis.services.discoveryService = (function (log, request) {

    // TODO: Implement
    function query(repositoryUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("discoveryService: query called with repositoryUrl: " + repositoryUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(repositoryUrl, 'GET', data, doneCb, failCb);
    }

    // TODO: Implement
    function getContentChanges(repositoryUrl, query, succinct, doneCb, failCb) {
        log.info("discoveryService: getContentChanges called with repositoryUrl: " + repositoryUrl);
        var data = {
            cmisSelector: "query",
            query: query,
            succinct: succinct
        };
        request.ajaxCall(repositoryUrl, 'POST', data, doneCb, failCb);
    }

    return {
        query: query,
        getContentChanges: getContentChanges
    };
}(webCmis.util.logger.getLogger(), webCmis.util.request));