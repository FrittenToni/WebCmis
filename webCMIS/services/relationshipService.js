webCmis.services.relationshipService = (function (log, request) {

    function getObjectRelations(rootFolderUrl, objectId, includeSubRelationshipTypes, relationshipDirection, typeId, maxItems, skipCount, filter, includeAllowableActions, succinct, doneCb, failCb) {
        log.info("relationshipService: getObjectRelations called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "relationships",
            objectId: objectId,
            includeSubRelationshipTypes: includeSubRelationshipTypes,
            relationshipDirection: relationshipDirection,
            typeId: typeId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    return {
        getObjectRelations: getObjectRelations
    };

}(webCmis.util.logger.getLogger(), webCmis.util.request));