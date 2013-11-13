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
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryService.prototype.getRepositories = function (doneCb, failCb) {
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        request.ajaxCall(this.getSessionParameters().getServerUrl(), 'GET', undefined, doneCb, failCb);
        log.debug('repositoryService: getRepositories called with serverUrl: ' + this.getSessionParameters().getServerUrl());
    };

    /**
     *
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryService.prototype.getRepositoryInfo = function (doneCb, failCb) {
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'GET', {cmisSelector: 'repositoryInfo'}, doneCb, failCb);
        log.debug('repositoryService: getRepositoryInfo called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl());
    };

    /**
     *
     * @param {string} [typeId]
     * @param {boolean} [includePropertyDefinitions]
     * @param {number} [maxItems]
     * @param {number} [skipCount]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryService.prototype.getTypeChildren = function (typeId, includePropertyDefinitions, maxItems, skipCount, doneCb, failCb) {
        assert.assertStringOptional(typeId);
        assert.assertBooleanOptional(includePropertyDefinitions);
        assert.assertNumberOptional(maxItems);
        assert.assertNumberOptional(skipCount);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        var data = {
            cmisSelector: 'typeChildren',
            typeId: typeId,
            includePropertyDefinition: includePropertyDefinitions,
            maxItems: maxItems,
            skipCount: skipCount
        };
        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'GET', data, doneCb, failCb);
        log.debug('repositoryService: getTypeChildren called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl() + ' and data: ' + JSON.stringify(data));
    };

    /**
     *
     * @param {string} [typeId]
     * @param {number} [depth]
     * @param {boolean} [includePropertyDefinitions]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryService.prototype.getTypeDescendants = function (typeId, depth, includePropertyDefinitions, doneCb, failCb) {
        assert.assertStringOptional(typeId);
        assert.assertNumberOptional(depth);
        assert.assertBooleanOptional(includePropertyDefinitions);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);

        var data = {
            cmisSelector: 'typeDescendants',
            typeId: typeId,
            depth: depth,
            includePropertyDefinition: includePropertyDefinitions
        };
        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'GET', data, doneCb, failCb);
        log.debug('repositoryService: getTypeDescendants called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl() + ' and data: ' + JSON.stringify(data));
    };

    /**
     *
     * @param {string} [typeId]
     * @param {function} [doneCb]
     * @param {function} [failCb]
     */
    RepositoryService.prototype.getTypeDefinition = function (typeId, doneCb, failCb) {
        assert.assertStringOptional(typeId);
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);
        var data = {
            cmisSelector: 'typeDefinition',
            typeId: typeId
        };
        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'GET', data, doneCb, failCb);
        log.debug('repositoryService: getTypeDefinition called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl() + ' and data: ' + JSON.stringify(data));
    };

    // TODO: implement
    RepositoryService.prototype.createType = function (typeId, depth, includePropertyDefinitions, doneCb, failCb) {
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);
        log.debug('repositoryService: createType called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl());
        var data = {
            cmisSelector: 'typeDefinition',
            typeId: typeId
        };
        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'GET', data, doneCb, failCb);
    };

    // TODO: implement
    RepositoryService.prototype.updateType = function (typeId, depth, includePropertyDefinitions, doneCb, failCb) {
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);
        log.debug('repositoryService: updateType called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl());
        var data = {
            cmisSelector: 'typeDefinition',
            typeId: typeId
        };
        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'GET', data, doneCb, failCb);
    };

    // TODO: implement
    RepositoryService.prototype.deleteType = function (typeId, depth, includePropertyDefinitions, doneCb, failCb) {
        assert.assertFunctionOptional(doneCb);
        assert.assertFunctionOptional(failCb);
        log.debug('repositoryService: deleteType called with repositoryUrl: ' + this.getSessionParameters().getRepositoryUrl());
        var data = {
            cmisSelector: 'typeDefinition',
            typeId: typeId
        };
        request.ajaxCall(this.getSessionParameters().getRepositoryUrl(), 'GET', data, doneCb, failCb);
    };

    return RepositoryService;

}(webCmis.util.logger.getLogger(), webCmis.util.assert, webCmis.util.request));