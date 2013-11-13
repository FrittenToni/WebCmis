webCmis.repository.AuthenticationProvider = (function (assert, logger) {

    function AuthenticationProvider() {
        this.headerEntries = [];
    }

    /**
     *
     * @param {String} name - name of header value
     * @param {String} value
     */
    AuthenticationProvider.prototype.appendToHeader = function (name, value) {
        assert.assertString(name);
        assert.assertString(value);

        this.headerEntries.push(new webCmis.repository.HeaderEntry(name, value));
    };

    /**
     *
     * @param {String} name - name of header value to remove
     */
    AuthenticationProvider.prototype.removeFromHeader = function (name) {
        assert.assertString(name);
        var index;

        for (index = 0; index < this.headerEntries; index += 1) {
            if (this.headerEntries[index].name === name) {
                this.headerEntries.splice(index, 1);
                break;
            }
        }
        logger.debug("Header with name: " + name + " was not registered.");
    };

    return AuthenticationProvider;
}(webCmis.util.assert, webCmis.util.logger.getLogger()));