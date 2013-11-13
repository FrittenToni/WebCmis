describe('repositoryService.js', function () {

    var serverURL = 'localhost';
    var port = 8080;
    var repositoryId = 'testRepository';
    var description = 'Some repository description.';

    describe('Creation of RepositoryConnection', function () {
       var repositoryInfo = {"A1": {"repositoryId": "A1", "repositoryName": "Apache Chemistry OpenCMIS InMemory Repository", "repositoryDescription": "Apache Chemistry OpenCMIS InMemory Repository (Version: 0.10.0)", "vendorName": "Apache Chemistry", "productName": "Apache-Chemistry-OpenCMIS-InMemory\/0.10.0", "productVersion": "0.10.0", "rootFolderId": "100", "capabilities": {"capabilityContentStreamUpdatability": "anytime", "capabilityChanges": "objectidsonly", "capabilityRenditions": "read", "capabilityGetDescendants": true, "capabilityGetFolderTree": true, "capabilityMultifiling": true, "capabilityUnfiling": true, "capabilityVersionSpecificFiling": false, "capabilityPWCSearchable": false, "capabilityPWCUpdatable": true, "capabilityAllVersionsSearchable": false, "capabilityOrderBy": "common", "capabilityQuery": "bothcombined", "capabilityJoin": "none", "capabilityACL": "manage", "capabilityCreatablePropertyTypes": {"canCreate": ["uri", "string", "datetime", "boolean", "id", "html", "integer", "decimal"]}, "capabilityNewTypeSettableAttributes": {"id": true, "localName": true, "localNamespace": true, "displayName": true, "queryName": true, "description": true, "creatable": true, "fileable": false, "queryable": false, "fulltextIndexed": false, "includedInSupertypeQuery": false, "controllablePolicy": false, "controllableACL": false}}, "aclCapabilities": {"supportedPermissions": "basic", "propagation": "objectonly", "permissions": [
            {"permission": "cmis:read", "description": "Read"},
            {"permission": "cmis:write", "description": "Write"},
            {"permission": "cmis:all", "description": "All"}
        ], "permissionMapping": [
            {"key": "canGetDescendents.Folder", "permission": ["cmis:read"]},
            {"key": "canGetChildren.Folder", "permission": ["cmis:read"]},
            {"key": "canGetParents.Folder", "permission": ["cmis:read"]},
            {"key": "canGetFolderParent.Object", "permission": ["cmis:read"]},
            {"key": "canCreateDocument.Folder", "permission": ["cmis:write"]},
            {"key": "canCreateFolder.Folder", "permission": ["cmis:write"]},
            {"key": "canCreateRelationship.Source", "permission": ["cmis:read"]},
            {"key": "canCreateRelationship.Target", "permission": ["cmis:read"]},
            {"key": "canGetProperties.Object", "permission": ["cmis:read"]},
            {"key": "canViewContent.Object", "permission": ["cmis:read"]},
            {"key": "canUpdateProperties.Object", "permission": ["cmis:write"]},
            {"key": "canMove.Object", "permission": ["cmis:write"]},
            {"key": "canMove.Target", "permission": ["cmis:write"]},
            {"key": "canMove.Source", "permission": ["cmis:write"]},
            {"key": "canDelete.Object", "permission": ["cmis:write"]},
            {"key": "canDeleteTree.Folder", "permission": ["cmis:write"]},
            {"key": "canSetContent.Document", "permission": ["cmis:write"]},
            {"key": "canDeleteContent.Document", "permission": ["cmis:write"]},
            {"key": "canAddToFolder.Object", "permission": ["cmis:write"]},
            {"key": "canAddToFolder.Folder", "permission": ["cmis:write"]},
            {"key": "canRemoveFromFolder.Object", "permission": ["cmis:write"]},
            {"key": "canRemoveFromFolder.Folder", "permission": ["cmis:write"]},
            {"key": "canCheckout.Document", "permission": ["cmis:write"]},
            {"key": "canCancelCheckout.Document", "permission": ["cmis:write"]},
            {"key": "canCheckin.Document", "permission": ["cmis:write"]},
            {"key": "canGetAllVersions.VersionSeries", "permission": ["cmis:read"]},
            {"key": "canGetObjectRelationships.Object", "permission": ["cmis:read"]},
            {"key": "canAddPolicy.Object", "permission": ["cmis:write"]},
            {"key": "canAddPolicy.Policy", "permission": ["cmis:write"]},
            {"key": "canRemovePolicy.Object", "permission": ["cmis:write"]},
            {"key": "canRemovePolicy.Policy", "permission": ["cmis:write"]},
            {"key": "canGetAppliedPolicies.Object", "permission": ["cmis:read"]},
            {"key": "canGetACL.Object", "permission": ["cmis:read"]},
            {"key": "canApplyACL.Object", "permission": ["cmis:all"]}
        ]}, "latestChangeLogToken": "0", "cmisVersionSupported": "1.1", "thinClientURI": "", "changesIncomplete": true, "changesOnType": ["cmis:document", "cmis:folder", "cmis:item"], "principalIdAnonymous": "anonymous", "principalIdAnyone": "anyone", "repositoryUrl": "http:\/\/localhost:8080\/cmis\/browser\/A1", "rootFolderUrl": "http:\/\/localhost:8080\/cmis\/browser\/A1\/root"}};

    });
})