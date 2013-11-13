webCmis.util.request = (function (logger) {

    function ajaxCall(url, requestType, data, doneCb, failCb) {
        logger.debug('Ajax call to url: ' + url, +' with data: ' + JSON.stringify(data));
        $.ajax({
            url: encodeURI(url),
            type: requestType,
//            beforeSend: function() {
//                xhr.setRequestHeader("Authority", authorizationToken);
//            },
            dataType: 'jsonp',
            data: data
        }).done(function (result, textStatus, jqXHR) {
                logger.debug('Ajax call was successful. URL: ' + url + ' parameters: ' + JSON.stringify(data) + ' Result: ' + JSON.stringify(result));
                if (doneCb) {
                    doneCb(result);
                }
            }
        ).fail(function (jqXHR, textStatus, errorThrown) {
                logger.debug('Ajax call was not successful. URL: ' + url + ' parameters: ' + JSON.stringify(data) + ' Error: ' + JSON.stringify(jqXHR));
                if (failCb) {
                    failCb(jqXHR);
                }
            }
        );
    }

    return {
        ajaxCall: ajaxCall
    };
}(webCmis.util.logger.getLogger()));
