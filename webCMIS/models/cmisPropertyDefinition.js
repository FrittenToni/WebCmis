webCmis.models.CmisPropertyDefinition = (function (log, assert, request) {

    // TODO: remove
    // var test2 = new webCmis.models.CmisPropertyDefinition({id:"myStringProperty", propertyType:"string", cardinality:"single", updatability: true, inherited: true, required: true, queryable: true, orderable: false, fulltextIndexed: false, includedInSupertypeQuery: false});
    /**
     *
     * @param {object} propertyDefinition
     * @param {string} propertyDefinition.id
     * @param {string} [propertyDefinition.localName]
     * @param {string} [propertyDefinition.localNamespace]
     * @param {string} [propertyDefinition.queryName]
     * @param {string} [propertyDefinition.displayName]
     * @param {string} [propertyDefinition.description]
     *
     * @constructor
     */
    function CmisPropertyDefinition(propertyDefinition) {
        assert.assertString(propertyDefinition.id, "id");
        assert.assertStringOptional(propertyDefinition.localName, "localName");
        assert.assertStringOptional(propertyDefinition.localNamespace, "localNamespace");
//        TODO: The string MUST NOT contain: whitespace " " comma "," double quotes '"' single quotes "'" backslash "\" the period "." the open "(" or close ")" parenthesis characters
        assert.assertStringOptional(propertyDefinition.queryName, "queryName");
        assert.assertStringOptional(propertyDefinition.displayName, "displayName");
        assert.assertStringOptional(propertyDefinition.description, "description");
        // enum
        assert.assertString(propertyDefinition.propertyType, "propertyType");
        // enum: "single", "multi"
        assert.assertString(propertyDefinition.cardinality, "cardinality");
        // enum: readonly, readwrite, whencheckedout, oncreate
        assert.assertString(propertyDefinition.updatability, "updatability");
        assert.assertBoolean(propertyDefinition.openChoice, "openChoice");
        assert.assertBoolean(propertyDefinition.inherited, "inherited");
        assert.assertBoolean(propertyDefinition.required, "required");
        assert.assertBoolean(propertyDefinition.queryable, "queryable");
        assert.assertBoolean(propertyDefinition.orderable, "orderable");

        this.id = propertyDefinition.id;
        this.localName = propertyDefinition.localName || '';
        this.localNamespace = propertyDefinition.localNamespace || '';
        this.queryName = propertyDefinition.queryName || '';
        this.displayName = propertyDefinition.displayName || '';
        this.description = propertyDefinition.description || '';
        this.propertyType = propertyDefinition.propertyType;
        this.cardinality = propertyDefinition.cardinality;
        this.updatability = propertyDefinition.updatability;
        this.openChoice = propertyDefinition.openChoice;
        this.inherited = propertyDefinition.inherited;
        this.required = propertyDefinition.required;
        this.queryable = propertyDefinition.queryable;
        this.orderable = propertyDefinition.orderable;
    }


    return CmisPropertyDefinition;

}(webCmis.util.logger.getLogger(), webCmis.util.assert, webCmis.util.request));