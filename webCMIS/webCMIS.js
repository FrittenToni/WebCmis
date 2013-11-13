webCmis.init = function (debugMode) {
    if (debugMode) {
        webCmis.util.logger.setLogLevel(log4javascript.Level.DEBUG);
    }
    var sessionParameters = new webCmis.repository.SessionParameters("http://cmis.alfresco.com/cmisbrowser", "bb212ecb-122d-47ea-b5c1-128affb9cd8f"),
        connection = webCmis.repository.repositoryConnectionFactory.createRepositoryConnection(sessionParameters),
        repositoryService = connection.getRepositoryService();

    function doneCallback(result) {

    }

    function failCallback(error) {

    }

    connection.getRepositories(doneCallback, failCallback);
    connection.getRepositoryInfo(doneCallback, failCallback);
    connection.getTypeChildren({
        typeId: "cmis:folder",
        includePropertyDefinitions: true,
        maxItems: 2000,
        skipCount: 0
    }, doneCallback, failCallback);

    connection.getTypeDescendants({
        typeId: "cmis:folder",
        depth: 2,
        includePropertyDefinition: true
    }, doneCallback, failCallback);

    connection.getChildren({
        typeId: "cmis:folder"
    }, doneCallback, failCallback);

//    connection.getChildren("workspace://SpacesStore/67f87d00-a2cd-4668-9644-d7a130435045", 200, 0, myFilter, true, true, undefined, undefined, true, false, doneCallback, failCallback);
//    connection.getDescendants("workspace://SpacesStore/67f87d00-a2cd-4668-9644-d7a130435045", myFilter, 1, true, true, undefined, true, false, doneCallback, failCallback);
//    // TODO: is not supported by alfresco repository - check again with another!
//    // connection.getFolderTree("workspace://SpacesStore/67f87d00-a2cd-4668-9644-d7a130435045", myFilter, 1, true, true, undefined, true, false, doneCallback, failCallback);
//    // TODO: Use folder that has a parent and test again
//    // connection.getFolderParent("workspace://SpacesStore/67f87d00-a2cd-4668-9644-d7a130435045", myFilter, false, doneCallback, failCallback);
//    connection.getCheckedOutDocs("workspace://SpacesStore/67f87d00-a2cd-4668-9644-d7a130435045", myFilter, 200, 0, undefined, undefined, true, true, false, doneCallback, failCallback);

};
