webCmis.repository.repositoryConnectionFactory = (function () {

    function createRepositoryConnection(sessionParameters) {
        return new webCmis.repository.RepositoryConnection(sessionParameters);
    }

    function createRepositoryConnections(serverUrl) {

    }

    return {
        createRepositoryConnection: createRepositoryConnection,
        createRepositoryConnections: createRepositoryConnections
    };
}());
