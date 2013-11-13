webCmis.util.HeaderEntry = (function (assert) {

    /**
     *
     * @param {String} name
     * @param {String] value
     * @constructor
     */
    function HeaderEntry(name, value) {
        assert.assertString(name);
        assert.assertString(value);

        this.name = name;
        this.value = value;
    }

    return HeaderEntry;
}(webCmis.util.assert));