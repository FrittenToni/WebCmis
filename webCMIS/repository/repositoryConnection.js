webCmis.repository.RepositoryConnection = (function (assert, log, defaults) {
    /**
     *
     * @param {SessionParameters} sessionParamters
     * @constructor
     */
    function RepositoryConnection(sessionParameters) {
        assert.assertObjectConstructedBy(sessionParameters, webCmis.repository.SessionParameters);

        var pOperationContext = new webCmis.util.OperationContext(),
            pRepositoryService = new webCmis.services.RepositoryService(sessionParameters),
            pNavigationService = new webCmis.services.NavigationService(sessionParameters);

        this.getOperationContext = function () {
            return pOperationContext;
        };

        this.setOperationContext = function (operationContext) {
            assert.assertObjectConstructedBy(sessionParameters, webCmis.util.OperationContext);
            pOperationContext = operationContext;
        };

        this.getRepositoryService = function () {
            return pRepositoryService;
        };

        this.getNavigationService = function () {
            return pNavigationService;
        };

        log.debug('RepositoryConnection created with session parameters: ' + JSON.stringify(sessionParameters));
    }

    /** REPOSITORY SERVICES **/
    /**
     * @param {object} params
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getRepositories = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        this.getRepositoryService().getRepositories(params.token, doneCb, failCb);
    };
    /**
     * @param {object} params
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getRepositoryInfo = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        this.getRepositoryService().getRepositoryInfo(params.token, doneCb, failCb);
    };
    /**
     * @param {object} params
     * @param {string} params.typeId
     * @param {string} [params.includePropertyDefinitions]
     * @param {string} [params.maxItems]
     * @param {string} [params.skipCount]
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getTypeChildren = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        var maxItems = params.maxItems || this.getOperationContext().getMaxItems(),
            skipCount = params.skipCount || defaults.skipCount;
        // TODO: enum for includePropertyDefinitions
        this.getRepositoryService().getTypeChildren(params.typeId, params.includePropertyDefinitions, maxItems, skipCount, params.token, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {string} params.typeId
     * @param {string} [params.depth]
     * @param {string} [params.includePropertyDefinitions]
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getTypeDescendants = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        // TODO: enum for includePropertyDefinitions and depth
        this.getRepositoryService().getTypeDescendants(params.typeId, params.depth, params.includePropertyDefinitions, params.token, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {string} params.typeId
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getTypeDefinition = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        this.getRepositoryService().getTypeDefinition(params.typeId, params.token, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {webCmis.models.CmisTypeDefinition} params.cmisTypeDefinition
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.createType = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        this.getRepositoryService().createType(params.cmisTypeDefinition, params.token, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {webCmis.models.CmisTypeDefinition} params.cmisTypeDefinition
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.updateType = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        this.getRepositoryService().updateType(params.cmisTypeDefinition, params.token, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {string} params.typeId
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.deleteType = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        this.getRepositoryService().deleteType(params.typeId, params.token, doneCb, failCb);
    };

    /** NAVIGATION SERVICES **/

    /**
     * @param {object} params
     * @param {string} params.objectId
     * @param {number} [params.maxItems]
     * @param {number} [params.skipCount]
     * @param {string} [params.filter]
     * @param {boolean} [params.includeAllowableActions]
     * @param {boolean} [params.includeRelationships]
     * @param {string} [params.renditionFilter]
     * @param {string} [params.orderBy]
     * @param {boolean} [params.includePathSegment]
     * @param {boolean} [params.succinct]
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getChildren = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        var maxItems = params.maxItems || this.getOperationContext().getMaxItems(),
            skipCount = params.skipCount || defaults.skipCount,
            filter = params.filter || this.getOperationContext().getPropertyFilter(),
            includeAllowableActions = params.includeAllowableActions || this.getOperationContext().getIncludeAllowableActions(),
            includeRelationships = params.includeRelationships || this.getOperationContext().getIncludeRelationships(),
            renditionFilter = params.renditionFilter || this.getOperationContext().getRenditionFilter(),
            orderBy = params.orderBy || this.getOperationContext().getOrderBy(),
            includePathSegment = params.includePathSegment || this.getOperationContext().getIncludePathSegment(),
            succinct = params.succinct || this.getOperationContext().getSuccinct();

        this.getNavigationService().getChildren(params.objectId, maxItems, skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, params.token, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {string} params.objectId
     * @param {string} [params.filter]
     * @param {number} [params.depth]
     * @param {boolean} [params.includeAllowableActions]
     * @param {string} [params.includeRelationships]
     * @param {string} [params.renditionFilter]
     * @param {boolean} [params.includePathSegment]
     * @param {boolean} [params.succinct]
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getDescendants = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        var filter = params.filter || this.getOperationContext().getPropertyFilter(),
            includeAllowableActions = params.includeAllowableActions || this.getOperationContext().getIncludeAllowableActions(),
            includeRelationships = params.includeRelationships || this.getOperationContext().getIncludeRelationships(),
            renditionFilter = params.renditionFilter || this.getOperationContext().getRenditionFilter(),
            includePathSegment = params.includePathSegment || this.getOperationContext().getIncludePathSegment(),
            succinct = params.succinct || this.getOperationContext().getSuccinct();

        this.getNavigationService().getDescendants(params.objectId, filter, params.depth, includeAllowableActions, includeRelationships, renditionFilter, includePathSegment, succinct, params.token, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {string} params.objectId
     * @param {string} [params.filter]
     * @param {number} [params.depth]
     * @param {boolean} [params.includeAllowableActions]
     * @param {string} [params.includeRelationships]
     * @param {string} [params.renditionFilter]
     * @param {boolean} [params.includePathSegment]
     * @param {boolean} [params.succinct]
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getFolderTree = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        var filter = params.filter || this.getOperationContext().getPropertyFilter(),
            includeAllowableActions = params.includeAllowableActions || this.getOperationContext().getIncludeAllowableActions(),
            includeRelationships = params.includeRelationships || this.getOperationContext().getIncludeRelationships(),
            renditionFilter = params.renditionFilter || this.getOperationContext().getRenditionFilter(),
            includePathSegment = params.includePathSegment || this.getOperationContext().getIncludePathSegment(),
            succinct = params.succinct || this.getOperationContext().getSuccinct();

        this.getNavigationService().getFolderTree(params.objectId, filter, params.depth, includeAllowableActions, includeRelationships, renditionFilter, includePathSegment, succinct, params.token, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {string} params.objectId
     * @param {string} [params.filter]
     * @param {boolean} [params.succinct]
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getFolderParent = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        var filter = params.filter || this.getOperationContext().getPropertyFilter(),
            succinct = params.succinct || this.getOperationContext().getSuccinct();

        this.getNavigationService().getFolderParent(params.objectId, filter, succinct, params.token, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {string} params.objectId
     * @param {string} [params.filter]
     * @param {boolean} [params.includeAllowableActions]
     * @param {string} [params.includeRelationships]
     * @param {string} [params.renditionFilter]
     * @param {boolean} [params.includePathSegment]
     * @param {boolean} [params.succinct]
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getObjectParents = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        var filter = params.filter || this.getOperationContext().getPropertyFilter(),
            includeAllowableActions = params.includeAllowableActions || this.getOperationContext().getIncludeAllowableActions(),
            includeRelationships = params.includeRelationships || this.getOperationContext().getIncludeRelationships(),
            renditionFilter = params.renditionFilter || this.getOperationContext().getRenditionFilter(),
            includePathSegment = params.includePathSegment || this.getOperationContext().getIncludePathSegment(),
            succinct = params.succinct || this.getOperationContext().getSuccinct();

        this.getNavigationService().getObjectParents(params.objectId, filter, includeAllowableActions, includeRelationships, renditionFilter, includePathSegment, succinct, params.token, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {string} params.objectId
     * @param {string} [params.filter]
     * @param {number} [params.maxItems]
     * @param {number} [params.skipCount]
     * @param {boolean} [params.includeAllowableActions]
     * @param {string} [params.includeRelationships]
     * @param {string} [params.renditionFilter]
     * @param {boolean} [params.succinct]
     * @param {string} [params.token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getCheckedOutDocs = function (params, doneCb, failCb) {
        assert.assertObject(params, 'params');
        var maxItems = params.maxItems || this.getOperationContext().getMaxItems(),
            filter = params.filter || this.getOperationContext().getPropertyFilter(),
            includeAllowableActions = params.includeAllowableActions || this.getOperationContext().getIncludeAllowableActions(),
            includeRelationships = params.includeRelationships || this.getOperationContext().getIncludeRelationships(),
            renditionFilter = params.renditionFilter || this.getOperationContext().getRenditionFilter(),
            orderBy = params.orderBy || this.getOperationContext().getOrderBy(),
            succinct = params.succinct || this.getOperationContext().getSuccinct();

        this.getNavigationService().getCheckedOutDocs(params.objectId, filter, maxItems, params.skipCount, orderBy, renditionFilter, includeAllowableActions, includeRelationships, succinct, params.token, doneCb, failCb);
    };
//
//    /** OBJECT SERVICES **/
//    RepositoryConnection.prototype.getCheckedOutDocs = function (objectId, filter, maxItems, skipCount, orderBy, renditionFilter, includeAllowableActions, includeRelationships, succinct, doneCb, failCb) {
//         navigationService.getCheckedOutDocs(this.rootFolderUrl, objectId, filter, maxItems, skipCount, orderBy, renditionFilter, includeAllowableActions, includeRelationships, succinct, doneCb, failCb);
//    };
//
//
//    /** MULTI FILING SERVICES **/
//
//    /** DISCOVERY SERVICES **/
//
//    /** VERSIONING SERVICES **/
//
//    /** RELATIONSHIP SERVICES **/
//    RepositoryConnection.prototype.getObjectRelations = function(objectId, includeSubRelationshipTypes, relationshipDirection, typeId, maxItems, skipCount, filter, includeAllowableActions, succinct, doneCb, failCb) {
//         relationshipService.getObjectRelations(this.rootFolderUrl, objectId, includeSubRelationshipTypes, relationshipDirection, typeId, maxItems, skipCount, filter, includeAllowableActions, succinct, doneCb, failCb);
//
//    };
//
//    /** POLICY SERVICES **/
//
//    /** ACL SERVICES **/
//
//
    return RepositoryConnection;

}(webCmis.util.assert, webCmis.util.logger.getLogger(), webCmis.util.parameterDefaults));