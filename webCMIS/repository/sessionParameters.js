webCmis.repository.SessionParameters = (function (assert, logger) {
    /**
     *
     * @param {String} serverUrl - the browser binding url of the cmis server
     * @param {String} repositoryId
     * @param {webCmis.repository.authenticationProvider} [authenticationProvider]
     * @constructor
     */
    function SessionParameters(serverUrl, repositoryId, authenticationProvider) {
        assert.assertString(serverUrl);
        assert.assertString(repositoryId);

        var pServerUrl = serverUrl,
            pRepositoryId = repositoryId,
            pAuthenticationProvider = authenticationProvider,
            pRepositoryUrl,
            pRootFolderUrl;

        this.getServerUrl = function () {
            return pServerUrl;
        };

        this.getRepositoryId = function () {
            return pRepositoryId;
        };

        this.getRepositoryUrl = function() {
            // TODO: return pRepositoryUrl
            return pServerUrl + '/' + pRepositoryId;
        };

        this.setRepositoryUrl = function(repositoryUrl) {
            // TODO: assert
            pRepositoryUrl = repositoryUrl;
        };

        this.getRootFolderUrl = function() {
            return pServerUrl + '/' + pRepositoryId + '/root';
        };

        this.setRootFolderUrl = function(rootFolderUrl) {
            // TODO: assert
            pRootFolderUrl = rootFolderUrl;
        };

        this.getAuthenticationProvider = function () {
            return authenticationProvider;
        };

        this.setAuthenticationProvider = function(authenticationProvider) {
            // TODO: assert
            pAuthenticationProvider = authenticationProvider;
        };

        logger.debug("SessionParameters created: serverUrl: " + pServerUrl + " repositoryId: " + pRepositoryId + "repositoryUrl" + this.getServerUrl() + " authenticationProvider: " + authenticationProvider);
    }

    SessionParameters.prototype.getServerUrl = function () {
        return this.getServerUrl();
    };

    SessionParameters.prototype.getRepositoryId = function () {
        return this.getRepositoryId();
    };

    SessionParameters.prototype.getRepositoryUrl = function() {
        return this.getRepositoryUrl();
    };

    SessionParameters.prototype.getAuthenticationProvider = function () {
        return this.getAuthenticationProvider() || undefined;
    };

    return SessionParameters;

}(webCmis.util.assert, webCmis.util.logger.getLogger()));