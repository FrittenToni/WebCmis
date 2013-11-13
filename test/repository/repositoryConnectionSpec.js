describe('RepositoryConnection.js', function () {

    var serverURL = 'localhost';
    var port = 8080;
    var repositoryId = 'testRepository';
    var description = 'Some repository description.';

    describe('Creation of RepositoryConnection', function() {
        it('Creation of RepositoryConnection with valid parameters', function () {
            var repositoryConnection = new webCmis.repository.RepositoryConnection(serverURL, port, repositoryId, description);
            expect(repositoryConnection.getServerURL()).toEqual(serverURL);
            expect(repositoryConnection.getPort()).toEqual(port);
            expect(repositoryConnection.getRepositoryId()).toEqual(repositoryId);
            expect(repositoryConnection.getDescription()).toEqual(description);
        });

        it('Creation fail of RepositoryConnection with invalid serverURL ', function () {
            expect(function() {new webCmis.repository.RepositoryConnection(undefined, port, repositoryId, description)}).toThrow();
            expect(function() {new webCmis.repository.RepositoryConnection(22, port, repositoryId, description)}).toThrow();
        });

        it('Creation fail of RepositoryConnection with invalid port ', function () {
            expect(function() {new webCmis.repository.RepositoryConnection(serverURL, undefined, repositoryId, description)}).toThrow();
            expect(function() {new webCmis.repository.RepositoryConnection(serverURL, 'string', repositoryId, description)}).toThrow();
        });

        it('Creation fail of RepositoryConnection with invalid repositoryId ', function () {
            expect(function() {new webCmis.repository.RepositoryConnection(serverURL, port, undefined, description)}).toThrow();
            expect(function() {new webCmis.repository.RepositoryConnection(serverURL, port, 22, description)}).toThrow();
        });

        it('Creation fail of RepositoryConnection with invalid description ', function () {
            expect(function() {new webCmis.repository.RepositoryConnection(serverURL, port, repositoryId, 66)}).toThrow();
            expect(function() {new webCmis.repository.RepositoryConnection(serverURL, port, repositoryId, undefined)}).not.toThrow();
        });
    });
})