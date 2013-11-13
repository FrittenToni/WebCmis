webCmis.util.assert = (function (logger) {

    function assertObject(objectToAssert) {
        if (!objectToAssert) {
            logger.error('Assertion Error: Object is undefined.');
            throw new Error('Assertion Error: Object is not undefined.');
        }
    }

    function assertObjectConstructedBy(object, constructorFunction) {
        if (!(object && object.constructor === constructorFunction)) {
            logger.error('Assertion Error: Object does not match expected constructor function: ' + constructorFunction);
            throw new Error('Assertion Error: Object does not match expected constructor function: ' + constructorFunction);
        }
    }

    function assertObjectOptionalConstructedBy(object, constructorFunction) {
        if (object && !(object.constructor === constructorFunction)) {
            logger.error('Assertion Error: Object does not match expected constructor function: ' + constructorFunction);
            throw new Error('Assertion Error: Object does not match expected constructor function: ' + constructorFunction);
        }
    }

    function assertFunction(fn) {
        if (!(fn && typeof fn === "function")) {
            logger.error('Assertion Error: Object is not a function: ' + constructorFunction);
            throw new Error('Assertion Error: Object is not a function: ' + constructorFunction);
        }
    }

    function assertFunctionOptional(fn) {
        if (fn && !(typeof fn === "function")) {
            logger.error('Assertion Error: Object is not a function: ' + constructorFunction);
            throw new Error('Assertion Error: Object is not a function: ' + constructorFunction);
        }
    }

    function assertString(string) {
        if (!(string && typeof string === 'string')) {
            logger.error('Assertion Error: Object is not a string.');
            throw new Error('Assertion Error: Object is not a string.');
        }
    }

    function assertStringOptional(string) {
        if (string && !(typeof string === 'string')) {
            logger.error('Assertion Error: Optional object is not a string.');
            throw new Error('Assertion Error: Object is not a string.');
        }
    }

    function assertBoolean(boolean) {
        if (!(boolean && typeof boolean === 'boolean')) {
            logger.error('Assertion Error: Object is not a boolean.');
            throw new Error('Assertion Error: Object is not a boolean.');
        }
    }

    function assertBooleanOptional(boolean) {
        if (boolean && !(typeof boolean === 'boolean')) {
            logger.error('Assertion Error: Object is not a boolean.');
            throw new Error('Assertion Error: Object is not a boolean.');
        }
    }

    function assertNumber(number) {
        if (!(number && typeof number === 'number')) {
            logger.error('Assertion Error: Object is not a number.');
            throw new Error('Assertion Error: Object is not a number.');
        }
    }

    function assertNumberOptional(number) {
        if (number && !(typeof number === 'number')) {
            logger.error('Assertion Error: Object is not a number.');
            throw new Error('Assertion Error: Object is not a number.');
        }
    }

    return {
        assertObject: assertObject,
        assertObjectConstructedBy: assertObjectConstructedBy,
        assertObjectConstructedByOptional: assertObjectOptionalConstructedBy,
        assertFunction: assertFunction,
        assertFunctionOptional: assertFunctionOptional,
        assertString: assertString,
        assertStringOptional: assertStringOptional,
        assertBoolean: assertBoolean,
        assertBooleanOptional: assertBooleanOptional,
        assertNumber: assertNumber,
        assertNumberOptional: assertNumberOptional
    };
}(webCmis.util.logger.getLogger()));