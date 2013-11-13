webCmis.services.objectService = (function (log, request) {

    // TODO: not implemented yet
    function createDocument(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("objectService: createDocument called with rootFolderUrl: " + rootFolderUrl);
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
        request.ajaxCall(rootFolderUrl, 'POST', data, doneCb, failCb);
    }

    function createDocumentFromSource(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
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
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function createFolder(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function createRelationship(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function createPolicy(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function createItem(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function getAllowableActions(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function getObject(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function getProperties(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function getObjectByPath(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function getContentStream(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function getRenditions(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function updateProperties(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function bulkUpdateProperties(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function moveObject(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function deleteObject(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function deleteTree(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function setContentStream(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function appendContentStream(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    function deleteContentStream(rootFolderUrl, objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        log.info("navigationService: getChildren called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }


    return {
        createDocument: createDocument,
        createDocumentFromSource: createDocumentFromSource,
        createFolder: createFolder,
        createRelationship: createRelationship,
        createPolicy: createPolicy,
        createItem: createItem,
        getAllowableActions: getAllowableActions,
        getObject: getObject,
        getRenditions: getRenditions,
        updateProperties: updateProperties,
        bulkUpdateProperties: bulkUpdateProperties,
        moveObject: moveObject,
        deleteObject: deleteObject,
        deleteTree: deleteTree,
        setContentStream: setContentStream,
        appendContentStream: appendContentStream,
        deleteContentStream: deleteContentStream
    };
}(webCmis.util.logger.getLogger(), webCmis.util.request));