webCmis.init = function (debugMode) {
    if (debugMode) {
        webCmis.util.logger.setLogLevel(log4javascript.Level.DEBUG);
    }
    // alfresco cmis: http://cmis.alfresco.com/cmisbrowser bb212ecb-122d-47ea-b5c1-128affb9cd8f
    var sessionParameters = new webCmis.repository.SessionParameters("http://localhost:8080/cmis/browser", "A1"),
        connection = webCmis.repository.repositoryConnectionFactory.createRepositoryConnection(sessionParameters);

    function doneCallback(result) {

    }

    function failCallback(error) {

    }

    connection.getRepositories({}, doneCallback, failCallback);
    connection.getRepositoryInfo({}, doneCallback, failCallback);
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

    var propertyDefintions = [];

    var myPropertyDefinition = new webCmis.models.CmisPropertyDefinition({
        id: "my:testProperty",
        localNamespace: "http://localNamespace.org",
        localName: "myStringProperty",
        queryName: "my:testProperty",
        displayName: "My test property",
        description: "this is a test property",
        propertyType: "string",
        updatability: "readwrite",
        cardinality: "single",
        inherited: true,
        openChoice: false,
        required: true,
        queryable: true,
        orderable: false
    });
    propertyDefintions.push(myPropertyDefinition);
    console.log(myPropertyDefinition);

    var mySecondPropertyDefinition = new webCmis.models.CmisPropertyDefinition({
        id: "my:secondTestProperty",
        localNamespace: "http://localNamespace.org",
        localName: "myStringProperty",
        queryName: "my:secondTestProperty",
        displayName: "My test property",
        description: "this is a test property",
        propertyType: "string",
        updatability: "readwrite",
        cardinality: "single",
        inherited: true,
        openChoice: false,
        required: true,
        queryable: true,
        orderable: false
    });
    propertyDefintions.push(mySecondPropertyDefinition);
    console.log(mySecondPropertyDefinition);

    var myType = new webCmis.models.CmisTypeDefinition({
        id: "my:ownType",
        baseId: "cmis:folder",
        parentId: "cmis:folder",
        displayName: "My own type",
        description: "this is my own type",
        localNamespace: "http://localNamespace.org",
        localName: "localName",
        queryName: "my:ownType",
        fileable: true,
        includedInSupertypeQuery: true,
        creatable: true,
        fulltextIndexed: true,
        queryable: true,
        controllablePolicy: true,
        controllableACL: true
    }, propertyDefintions);

    connection.createType({cmisTypeDefinition: myType}, doneCallback, failCallback);


//  not supported by inMemory Repository
//  myType.displayName = "myEdited type";
//  connection.updateType({cmisTypeDefinition: myType}, doneCallback, failCallback);

//    connection.deleteType({typeId: "my:ownType"}, doneCallback, failCallback);

    console.log(myType);
};

//**
//    connection.getChildren("workspace://SpacesStore/67f87d00-a2cd-4668-9644-d7a130435045", 200, 0, myFilter, true, true, undefined, undefined, true, false, doneCallback, failCallback);
//    connection.getDescendants("workspace://SpacesStore/67f87d00-a2cd-4668-9644-d7a130435045", myFilter, 1, true, true, undefined, true, false, doneCallback, failCallback);
//    // TODO: is not supported by alfresco repository - check again with another!
//    // connection.getFolderTree("workspace://SpacesStore/67f87d00-a2cd-4668-9644-d7a130435045", myFilter, 1, true, true, undefined, true, false, doneCallback, failCallback);
//    // TODO: Use folder that has a parent and test again
//    // connection.getFolderParent("workspace://SpacesStore/67f87d00-a2cd-4668-9644-d7a130435045", myFilter, false, doneCallback, failCallback);
//    connection.getCheckedOutDocs("workspace://SpacesStore/67f87d00-a2cd-4668-9644-d7a130435045", myFilter, 200, 0, undefined, undefined, true, true, false, doneCallback, failCallback);

//};
