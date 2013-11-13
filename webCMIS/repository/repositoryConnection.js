webCmis.repository.RepositoryConnection = (function (assert, log) {
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
     *
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getRepositories = function (doneCb, failCb) {
        this.getRepositoryService().getRepositories(doneCb, failCb);
    };
    /**
     *
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getRepositoryInfo = function (doneCb, failCb) {
        this.getRepositoryService().getRepositoryInfo(doneCb, failCb);
    };
    /**
     *
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getTypeChildren = function (params, doneCb, failCb) {
        assert.assertObject(params);
        var maxItems = params.maxItems || this.getOperationContext().getMaxItems();

        this.getRepositoryService().getTypeChildren(params.typeId, params.includePropertyDefinitions, maxItems, params.skipCount, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getTypeDescendants = function (params, doneCb, failCb) {
        assert.assertObject(params);
        this.getRepositoryService().getTypeDescendants(params.typeId, params.depth, params.includePropertyDefinitions, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getTypeDefinition = function (params, doneCb, failCb) {
        assert.assertObject(params);
        this.getRepositoryService().getTypeDefinition(params.typeId, doneCb, failCb);
    };

    /** NAVIGATION SERVICES **/

    /**
     *
     * @param {object} params
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getChildren = function (params, doneCb, failCb) {
        assert.assertObject(params);
        var maxItems = params.maxItems || this.getOperationContext().getMaxItems(),
            filter = params.filter || this.getOperationContext().getPropertyFilter(),
            includeAllowableActions = params.includeAllowableActions || this.getOperationContext().getIncludeAllowableActions(),
            includeRelationships = params.includeRelationships || this.getOperationContext().getIncludeRelationships(),
            renditionFilter = params.renditionFilter || this.getOperationContext().getRenditionFilter(),
            orderBy = params.orderBy || this.getOperationContext().getOrderBy(),
            includePathSegment = params.includePathSegment || this.getOperationContext().getIncludePathSegment(),
            succinct = params.succinct || this.getOperationContext().getSuccinct();

        this.getNavigationService().getChildren(params.objectId, maxItems, params.skipCount, filter, includeAllowableActions, includeRelationships, renditionFilter, orderBy, includePathSegment, succinct, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getDescendants = function (params, doneCb, failCb) {
        assert.assertObject(params);
        var filter = params.filter || this.getOperationContext().getPropertyFilter(),
            includeAllowableActions = params.includeAllowableActions || this.getOperationContext().getIncludeAllowableActions(),
            includeRelationships = params.includeRelationships || this.getOperationContext().getIncludeRelationships(),
            renditionFilter = params.renditionFilter || this.getOperationContext().getRenditionFilter(),
            includePathSegment = params.includePathSegment || this.getOperationContext().getIncludePathSegment(),
            succinct = params.succinct || this.getOperationContext().getSuccinct();

        this.getNavigationService().getDescendants(params.objectId, filter, params.depth, includeAllowableActions, includeRelationships, renditionFilter, includePathSegment, succinct, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getFolderTree = function (params, doneCb, failCb) {
        assert.assertObject(params);
        var filter = params.filter || this.getOperationContext().getPropertyFilter(),
            includeAllowableActions = params.includeAllowableActions || this.getOperationContext().getIncludeAllowableActions(),
            includeRelationships = params.includeRelationships || this.getOperationContext().getIncludeRelationships(),
            renditionFilter = params.renditionFilter || this.getOperationContext().getRenditionFilter(),
            includePathSegment = params.includePathSegment || this.getOperationContext().getIncludePathSegment(),
            succinct = params.succinct || this.getOperationContext().getSuccinct();

        this.getNavigationService().getFolderTree(params.objectId, filter, params.depth, includeAllowableActions, includeRelationships, renditionFilter, includePathSegment, succinct, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getFolderParent = function (params, doneCb, failCb) {
        assert.assertObject(params);
        var filter = params.filter || this.getOperationContext().getPropertyFilter(),
            succinct = params.succinct || this.getOperationContext().getSuccinct();

        this.getNavigationService().getFolderParent(params.objectId, filter, succinct, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getObjectParents = function (params, doneCb, failCb) {
        assert.assertObject(params);
        var filter = params.filter || this.getOperationContext().getPropertyFilter(),
            includeAllowableActions = params.includeAllowableActions || this.getOperationContext().getIncludeAllowableActions(),
            includeRelationships = params.includeRelationships || this.getOperationContext().getIncludeRelationships(),
            renditionFilter = params.renditionFilter || this.getOperationContext().getRenditionFilter(),
            includePathSegment = params.includePathSegment || this.getOperationContext().getIncludePathSegment(),
            succinct = params.succinct || this.getOperationContext().getSuccinct();

        this.getNavigationService().getObjectParents(params.objectId, filter, includeAllowableActions, includeRelationships, renditionFilter, includePathSegment, succinct, doneCb, failCb);
    };
    /**
     *
     * @param {object} params
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryConnection.prototype.getCheckedOutDocs = function (params, doneCb, failCb) {
        assert.assertObject(params);
        var maxItems = params.maxItems || this.getOperationContext().getMaxItems(),
            filter = params.filter || this.getOperationContext().getPropertyFilter(),
            includeAllowableActions = params.includeAllowableActions || this.getOperationContext().getIncludeAllowableActions(),
            includeRelationships = params.includeRelationships || this.getOperationContext().getIncludeRelationships(),
            renditionFilter = params.renditionFilter || this.getOperationContext().getRenditionFilter(),
            orderBy = params.orderBy || this.getOperationContext().getOrderBy(),
            succinct = params.succinct || this.getOperationContext().getSuccinct();

        this.getNavigationService().getCheckedOutDocs(objectId, filter, maxItems, params.skipCount, orderBy, renditionFilter, includeAllowableActions, includeRelationships, succinct, doneCb, failCb);
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

}(webCmis.util.assert, webCmis.util.logger.getLogger()));