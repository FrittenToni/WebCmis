webCmis.util.assert = (function (logger) {

    function assertIsDefined(objectToAssert, objectName) {
        if(!objectToAssert) {
            logger.error('Assertion Error:' + objectName + ' must not be undefined.');
            throw new Error('Assertion Error:' + objectName + ' must not be undefined.');
        }
    }

    function assertObject(objectToAssert, objectName) {
        if (!(typeof objectToAssert === "object")) {
            logger.error('Assertion Error: ' + objectName + ' must be an object!' );
            throw new Error('Assertion Error: ' + objectName + ' must be an object!');
        }
    }

    function assertObjectConstructedBy(object, constructorFunction, objectName) {
        assertIsDefined(object, objectName);
        if (!(object.constructor === constructorFunction)) {
            logger.error('Assertion Error: ' + objectName + ' does not match expected constructor function: ' + constructorFunction);
            throw new Error('Assertion Error: ' + objectName + ' does not match expected constructor function: ' + constructorFunction);
        }
    }

    function assertObjectOptionalConstructedBy(object, constructorFunction, objectName) {
        if (object && !(object.constructor === constructorFunction)) {
            logger.error('Assertion Error: ' + objectName + ' does not match expected constructor function: ' + constructorFunction);
            throw new Error('Assertion Error: ' + objectName + ' does not match expected constructor function: ' + constructorFunction);
        }
    }

    function assertFunction(fn, objectName) {
        assertIsDefined(fn, objectName);
        if (!(typeof fn === "function")) {
            logger.error('Assertion Error:' + objectName + ' is not a function!');
            throw new Error('Assertion Error: ' + objectName + ' is not a function!');
        }
    }

    function assertFunctionOptional(fn, objectName) {
        if (fn && !(typeof fn === "function")) {
            logger.error('Assertion Error: ' + objectName + ' is not a function: ' + constructorFunction);
            throw new Error('Assertion Error: ' + objectName + ' is not a function: ' + constructorFunction);
        }
    }

    function assertString(string, objectName) {
        assertIsDefined(string, objectName);
        if (!(typeof string === 'string')) {
            logger.error('Assertion Error: ' + objectName + ' is not a string.');
            throw new Error('Assertion Error: ' + objectName + ' is not a string.');
        }
    }

    function assertStringOptional(string, objectName) {
        if (string && !(typeof string === 'string')) {
            logger.error('Assertion Error: ' + objectName + ' is not a string.');
            throw new Error('Assertion Error: ' + objectName + 't is not a string.');
        }
    }

    function assertBoolean(boolean, objectName) {
        if (!(typeof boolean === 'boolean')) {
            logger.error('Assertion Error: ' + objectName + ' is not a boolean.');
            throw new Error('Assertion Error: ' + objectName + ' is not a boolean.');
        }
    }

    function assertBooleanOptional(boolean, objectName) {
        if (boolean && !(typeof boolean === 'boolean')) {
            logger.error('Assertion Error: ' + objectName + ' is not a boolean.');
            throw new Error('Assertion Error: ' + objectName + ' is not a boolean.');
        }
    }

    function assertNumber(number, objectName) {
        assertIsDefined(number, objectName);
        if (!(typeof number === 'number')) {
            logger.error('Assertion Error: ' + objectName + ' is not a number.');
            throw new Error('Assertion Error: ' + objectName + ' is not a number.');
        }
    }

    function assertNumberOptional(number, objectName) {
        if (number && !(typeof number === 'number')) {
            logger.error('Assertion Error: ' + objectName + ' is not a number.');
            throw new Error('Assertion Error: ' + objectName + ' is not a number.');
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