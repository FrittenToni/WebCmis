webCmis.util.logger = (function () {

    var logger = log4javascript.getDefaultLogger();
    logger.removeAllAppenders();
    logger.addAppender(new log4javascript.BrowserConsoleAppender());

    function setLogLevel(logLevel) {
        logger.setLevel(logLevel);
    }

    function getLogger() {
        return logger;
    }

    return {
        setLogLevel: setLogLevel,
        getLogger: getLogger
    };
}());