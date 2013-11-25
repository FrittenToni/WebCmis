webCmis.services.RepositoryService = (function (log, assert, request) {

    /**
     *
     * @param sessionParameters
     * @constructor
     */
    function RepositoryService(sessionParameters) {
        assert.assertObjectConstructedBy(sessionParameters, webCmis.repository.SessionParameters);
        log.debug('RepositoryService created with session parameters: ' + JSON.stringify(sessionParameters));
        this.getSessionParameters = function () {
            return sessionParameters;
        };
    }

    /**
     *
     * @param {string} [token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryService.prototype.getRepositories = function (token, doneCb, failCb) {
        assert.assertStringOptional(token);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        var data = {
            token: token
        };

        request.ajaxCall(this.getSessionParameters().getServerUrl(), 'GET', data, doneCb, failCb);
        log.debug('repositoryService: getRepositories called with serverUrl: ' + this.getSessionParameters().getServerUrl() + ' and data: ' + JSON.stringify(data));
    };

    /**
     *
     * @param {string} [token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryService.prototype.getRepositoryInfo = function (token, doneCb, failCb) {
        assert.assertStringOptional(token);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        var data = {
            cmisSelector: 'repositoryInfo',
            token: token
        };

        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'GET', data, doneCb, failCb);
        log.debug('repositoryService: getRepositoryInfo called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl()) + ' and data: ' + JSON.stringify(data);
    };

    /**
     *
     * @param {string} [typeId]
     * @param {boolean} [includePropertyDefinitions]
     * @param {number} [maxItems]
     * @param {number} [skipCount]
     * @param {string} [token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryService.prototype.getTypeChildren = function (typeId, includePropertyDefinitions, maxItems, skipCount, token, doneCb, failCb) {
        assert.assertStringOptional(typeId);
        assert.assertBooleanOptional(includePropertyDefinitions);
        assert.assertNumberOptional(maxItems);
        assert.assertNumberOptional(skipCount);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);
        assert.assertStringOptional(token);

        var data = {
            cmisSelector: 'typeChildren',
            typeId: typeId,
            includePropertyDefinition: includePropertyDefinitions,
            maxItems: maxItems,
            skipCount: skipCount,
            token: token
        };
        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'GET', data, doneCb, failCb);
        log.debug('repositoryService: getTypeChildren called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl() + ' and data: ' + JSON.stringify(data));
    };

    /**
     *
     * @param {string} [typeId]
     * @param {number} [depth]
     * @param {boolean} [includePropertyDefinitions]
     * @param {string} [token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryService.prototype.getTypeDescendants = function (typeId, depth, includePropertyDefinitions, token, doneCb, failCb) {
        assert.assertStringOptional(typeId);
        assert.assertNumberOptional(depth);
        assert.assertBooleanOptional(includePropertyDefinitions);
        assert.assertStringOptional(token);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        var data = {
            cmisSelector: 'typeDescendants',
            typeId: typeId,
            depth: depth,
            includePropertyDefinition: includePropertyDefinitions,
            token: token
        };
        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'GET', data, doneCb, failCb);
        log.debug('repositoryService: getTypeDescendants called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl() + ' and data: ' + JSON.stringify(data));
    };

    /**
     *
     * @param {string} [typeId]
     * @param {string} [token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryService.prototype.getTypeDefinition = function (typeId, token, doneCb, failCb) {
        assert.assertStringOptional(typeId);
        assert.assertStringOptional(token);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

            var data = {
            cmisSelector: 'typeDefinition',
            typeId: typeId ,
            token: token
        };
        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'GET', data, doneCb, failCb);
        log.debug('repositoryService: getTypeDefinition called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl() + ' and data: ' + JSON.stringify(data));
    };

    /**
     *
     * @param {webCmis.models.CmisTypeDefinition} cmisTypeDefinition
     * @param {string} [token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryService.prototype.createType = function (cmisTypeDefinition, token, doneCb, failCb) {
        assert.assertObjectConstructedBy(cmisTypeDefinition, webCmis.models.CmisTypeDefinition, 'cmisTypeDefinition');
        assert.assertStringOptional(token);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        var data = {
            cmisAction: 'createType',
            type: JSON.stringify(cmisTypeDefinition),
            token: token
        };
        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'POST', data, doneCb, failCb);
        log.debug('repositoryService: createType called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl() + ' and data: ' + JSON.stringify(data));
    };

    /**
     *
     * @param {webCmis.models.CmisTypeDefinition} cmisTypeDefinition
     * @param {string} [token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryService.prototype.updateType = function (cmisTypeDefinition, token, doneCb, failCb) {
        assert.assertObjectConstructedBy(cmisTypeDefinition, webCmis.models.CmisTypeDefinition, 'cmisTypeDefinition');
        assert.assertStringOptional(token);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        var data = {
            cmisAction: 'updateType',
            type: JSON.stringify(cmisTypeDefinition),
            token: token
        };
        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'POST', data, doneCb, failCb);
        log.debug('repositoryService: updateType called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl() + ' and data: ' + JSON.stringify(data));
    };

    /**
     *
     * @param {string} [typeId]
     * @param {string} [token]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryService.prototype.deleteType = function (typeId, token, doneCb, failCb) {
        assert.assertStringOptional(typeId);
        assert.assertStringOptional(token);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        var data = {
            cmisAction: 'deleteType',
            typeId: typeId,
            token: token
        };
        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'POST', data, doneCb, failCb);
        log.debug('repositoryService: deleteType called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl() + ' and data: ' + JSON.stringify(data));
    };

    return RepositoryService;

}(webCmis.util.logger.getLogger(), webCmis.util.assert, webCmis.util.request));