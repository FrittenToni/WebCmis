webCmis.services.NavigationService = (function (log, assert, request) {

    function NavigationService(sessionParameters) {
        assert.assertObjectConstructedBy(sessionParameters, webCmis.repository.SessionParameters);
        log.debug('RepositoryService created with session parameters: ' + JSON.stringify(sessionParameters));
        this.getSessionParameters = function () {
            return sessionParameters;
        };
    }

    /**
     *
     * @param {string} objectId
     * @param {number} [maxItems]
     * @param {number} [skipCount]
     * @param {string} [filter]
     * @param {boolean} [includeAllowableActions]
     * @param {boolean} [includeRelationships]
     * @param {string} [renditionFilter]
     * @param {string} [orderBy]
     * @param {boolean} [includePathSegment]
     * @param {boolean} [succinct]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    NavigationService.prototype.getChildren = function (objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb) {
        assert.assertString(objectId);
        assert.assertNumberOptional(maxItems);
        assert.assertNumberOptional(skipCount);
        assert.assertStringOptional(filter);
        assert.assertBooleanOptional(includeAllowableActions);
        assert.assertBooleanOptional(includeRelationships);
        assert.assertStringOptional(renditionFilter);
        assert.assertStringOptional(orderBy);
        assert.assertBooleanOptional(includePathSegment);
        assert.assertBooleanOptional(succinct);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        var data = {
            cmisSelector: "children",
            objectId: objectId,
            maxItems: maxItems,
            skipCount: skipCount,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y does this parameter not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            orderBy: orderBy,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(this.getSessionParameters().getRootFolderUrl(), 'GET', data, doneCb, failCb);
        log.debug("navigationService: getChildren called with rootFolderUrl: " + this.getSessionParameters().getRootFolderUrl() + ' and data: ' + JSON.stringify(data));
    };

    /**
     *
     * @param {string} objectId
     * @param {string} [filter]
     * @param {number} [depth]
     * @param {boolean} [includeAllowableActions]
     * @param {boolean} [includeRelationships]
     * @param {string} [renditionFilter]
     * @param {boolean} [includePathSegment]
     * @param {boolean} [succinct]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    NavigationService.prototype.getDescendants = function (objectId, filter, depth, includeAllowableActions, includeRelationships, renditionFilter, includePathSegment, succinct, doneCb, failCb) {
        assert.assertString(objectId);
        assert.assertStringOptional(filter);
        assert.assertNumberOptional(depth);
        assert.assertBooleanOptional(includeAllowableActions);
        assert.assertBooleanOptional(includeRelationships);
        assert.assertStringOptional(renditionFilter);
        assert.assertBooleanOptional(includePathSegment);
        assert.assertBooleanOptional(succinct);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        var data = {
            cmisSelector: "descendants",
            objectId: objectId,
            filter: filter,
            depth: depth,
            includeAllowableActions: includeAllowableActions,
            // TODO: y does this parameter not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(this.getSessionParameters().getRootFolderUrl(), 'GET', data, doneCb, failCb);
        log.debug("navigationService: getDescendants called with rootFolderUrl: " + this.getSessionParameters().getRootFolderUrl() + ' and data: ' + JSON.stringify(data));
    };

    /**
     *
     * @param {string} objectId
     * @param {string} [filter]
     * @param {number} [depth]
     * @param {boolean} [includeAllowableActions]
     * @param {boolean} [includeRelationships]
     * @param {string} [renditionFilter]
     * @param {boolean} [includePathSegment]
     * @param {boolean} [succinct]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    NavigationService.prototype.getFolderTree = function (objectId, filter, depth, includeAllowableActions, includeRelationships, renditionFilter, includePathSegment, succinct, doneCb, failCb) {
        assert.assertString(objectId);
        assert.assertStringOptional(filter);
        assert.assertNumberOptional(depth);
        assert.assertBooleanOptional(includeAllowableActions);
        assert.assertBooleanOptional(includeRelationships);
        assert.assertStringOptional(renditionFilter);
        assert.assertBooleanOptional(includePathSegment);
        assert.assertBooleanOptional(succinct);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        var data = {
            cmisSelector: "folderTree",
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
        request.ajaxCall(this.getSessionParameters().getRootFolderUrl(), 'GET', data, doneCb, failCb);
        log.debug("navigationService: getFolderTree called with rootFolderUrl: " + this.getSessionParameters().getRootFolderUrl() + ' and data: ' + JSON.stringify(data));
    };

    /**
     *
     * @param {string} objectId
     * @param {string} [filter]
     * @param {boolean} [succinct]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    NavigationService.prototype.getFolderParent = function (rootFolderUrl, objectId, filter, succinct, doneCb, failCb) {
        assert.assertString(objectId);
        assert.assertStringOptional(filter);
        assert.assertBooleanOptional(succinct);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        var data = {
            cmisSelector: "parent",
            objectId: objectId,
            filter: filter,
            succinct: succinct
        };
        request.ajaxCall(this.getSessionParameters().getRootFolderUrl(), 'GET', data, doneCb, failCb);
        log.debug("navigationService: getFolderParent called with rootFolderUrl: " + this.getSessionParameters().getRootFolderUrl() + ' and data: ' + JSON.stringify(data));
    };

    /**
     *
     * @param {string} objectId
     * @param {string} [filter]
     * @param {boolean} [includeAllowableActions]
     * @param {boolean} [includeRelationships]
     * @param {string} [renditionFilter]
     * @param {boolean} [includePathSegment]
     * @param {boolean} [succinct]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    NavigationService.prototype.getObjectParents = function (objectId, filter, includeAllowableActions, includeRelationships, renditionFilter, includePathSegment, succinct, doneCb, failCb) {
        assert.assertString(objectId);
        assert.assertStringOptional(filter);
        assert.assertBooleanOptional(includeAllowableActions);
        assert.assertBooleanOptional(includeRelationships);
        assert.assertStringOptional(renditionFilter);
        assert.assertBooleanOptional(includePathSegment);
        assert.assertBooleanOptional(succinct);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        var data = {
            cmisSelector: "parents",
            objectId: objectId,
            filter: filter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            renditionFilter: renditionFilter,
            includePathSegment: includePathSegment,
            succinct: succinct
        };
        request.ajaxCall(this.getSessionParameters().getRootFolderUrl(), 'GET', data, doneCb, failCb);
        log.debug("navigationService: getObjectParents called with rootFolderUrl: " + this.getSessionParameters().getRootFolderUrl() + ' and data: ' + JSON.stringify(data));
    };

    /**
     *
     * @param {string} objectId
     * @param {string} [filter]
     * @param {number} [maxItems]
     * @param {number} [skipCount]
     * @param {boolean} [includeAllowableActions]
     * @param {boolean} [includeRelationships]
     * @param {string} [renditionFilter]
     * @param {boolean} [succinct]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    NavigationService.prototype.getCheckedOutDocs = function (objectId, filter, maxItems, skipCount, orderBy, renditionFilter, includeAllowableActions, includeRelationships, succinct, doneCb, failCb) {
        var data = {
            cmisSelector: "checkedOut",
            objectId: objectId,
            filter: filter,
            maxItems: maxItems,
            skipCount: skipCount,
            orderBy: orderBy,
            renditionFilter: renditionFilter,
            includeAllowableActions: includeAllowableActions,
            // TODO: y this parameter does not work?
            //includeRelationships: includeRelationships,
            succinct: succinct
        };
        request.ajaxCall(this.getSessionParameters().getRootFolderUrl(), 'GET', data, doneCb, failCb);
        log.debug("navigationService: getCheckedOutDocs called with rootFolderUrl: " + this.getSessionParameters().getRootFolderUrl() + ' and data: ' + JSON.stringify(data));
    };

    return NavigationService;

}(webCmis.util.logger.getLogger(), webCmis.util.assert, webCmis.util.request));