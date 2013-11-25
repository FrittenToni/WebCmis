webCmis.init = function (debugMode) {
    if (debugMode) {
        webCmis.util.logger.setLogLevel(log4javascript.Level.DEBUG);
    }
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

    connection.deleteType({typeId: "my:ownType"}, doneCallback, failCallback);

    // Navigation Services
    connection.getChildren({
        objectId: '101',
        maxItems: 100,
        filter: "cmis:name",
        includeAllowableActions: true,
        includeRelationships: "none",
        renditionFilter: undefined,
        orderBy: undefined,
        includePathSegment: false,
        succinct: false
    }, doneCallback, failCallback);

    connection.getDescendants({
        objectId: '101',
        filter: "cmis:name",
        depth: 2,
        includeAllowableActions: true,
        includeRelationships: "none",
        renditionFilter: undefined,
        includePathSegment: false,
        succinct: false
    },doneCallback, failCallback);

    // it seems that this method is not supported by the inmemory repository
    connection.getFolderTree({
        objectId: '101',
        filter: "cmis:name",
        depth: 2,
        includeAllowableActions: true,
        includeRelationships: "none",
        renditionFilter: undefined,
        includePathSegment: false,
        succinct: false
    },doneCallback, failCallback);

    connection.getFolderParent({
        objectId: '101',
        filter: "cmis:name",
        succinct: false
    },doneCallback, failCallback);

    connection.getObjectParents({
        objectId: '101',
        filter: "cmis:name",
        includeAllowableActions: true,
        includeRelationships: "none",
        renditionFilter: undefined,
        includePathSegment: false,
        succinct: false
    },doneCallback, failCallback);

    connection.getCheckedOutDocs({
        objectId: '101',
        filter: "cmis:name",
        maxItems: 100,
        skipCount: 0,
        includeAllowableActions: true,
        includeRelationships: "none",
        renditionFilter: undefined,
        includePathSegment: false,
        succinct: false
    },doneCallback, failCallback);
};
