webCmis.services.policyService = (function (log, request) {

    function applyPolicy(rootFolderUrl, objectId, policyId, succinct, doneCb, failCb) {
        log.debug("policyService: applyPolicy called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "applyPolicy",
            objectId: objectId,
            policyId: policyId,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'POST', data, doneCb, failCb);
    }

    function removePolicy(rootFolderUrl, objectId, policyId, succinct, doneCb, failCb) {
        log.debug("policyService: removePolicy called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "removePolicy",
            objectId: objectId,
            policyId: policyId,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'POST', data, doneCb, failCb);
    }

    function getAppliedPolicies(rootFolderUrl, objectId, filter, succinct, doneCb, failCb) {
        log.debug("policyService: getAppliedPolicies called with rootFolderUrl: " + rootFolderUrl);
        var data = {
            cmisSelector: "policies",
            objectId: objectId,
            filter: filter,
            succinct: succinct
        };
        request.ajaxCall(rootFolderUrl, 'GET', data, doneCb, failCb);
    }

    return {
        applyPolicy: applyPolicy,
        removePolicy: removePolicy,
        getAppliedPolicies: getAppliedPolicies
    };

}(webCmis.util.logger.getLogger(), webCmis.util.request));