webCmis.util.OperationContext = (function (assert, logger) {

    function OperationContext() {
        // TODO: parameter validation in setter methods
        var pPropertyFilter,
            pIncludeAcls = false,
            pIncludeAllowableActions = true,
            pIncludePolicies = false,
            pIncludeRelationships = false,
            pRenditionFilter,
            pIncludePathSegment = true,
            pOrderBy,
            pMaxItems = 100,
            pSuccinct = false;

        this.setPropertyFilter = function (propertyFilter) {
            pPropertyFilter = propertyFilter;
        };

        this.getPropertyFilter = function () {
            return pPropertyFilter;
        };

        this.setIncludeAcls = function (includeAcls) {
            pIncludeAcls = includeAcls;
        };

        this.getIncludeAcls = function () {
            return pIncludeAcls;
        };

        this.setIncludeAllowableActions = function (IncludeAllowableActions) {
            pIncludeAllowableActions = IncludeAllowableActions;
        };

        this.getIncludeAllowableActions = function () {
            return pIncludeAllowableActions;
        };

        this.setIncludePolicies = function (includePolicies) {
            pIncludePolicies = includePolicies;
        };

        this.getIncludePolicies = function () {
            return pIncludePolicies;
        };

        this.setIncludeRelationships = function (includeRelationships) {
            pIncludeRelationships = includeRelationships;
        };

        this.getIncludeRelationships = function () {
            return pIncludeRelationships;
        };

        this.setRenditionFilter = function (renditionFilter) {
            pRenditionFilter = renditionFilter;
        };

        this.getRenditionFilter = function () {
            return pRenditionFilter;
        };

        this.setIncludePathSegment = function (includePathSegment) {
            pIncludePathSegment = includePathSegment;
        };

        this.getIncludePathSegment = function () {
            return pIncludePathSegment;
        };

        this.setOrderBy = function (orderBy) {
            pOrderBy = orderBy;
        };

        this.getOrderBy = function () {
            return pOrderBy;
        };

        this.setMaxItems = function (maxItems) {
            pMaxItems = maxItems;
        };

        this.getMaxItems = function () {
            return pMaxItems;
        };

        this.setSuccinct= function (succinct) {
            pSuccinct = succinct;
        };

        this.getSuccinct = function () {
            return pSuccinct;
        };

        logger.debug('OperationContext created.');
    }

    OperationContext.prototype.init = function (propertyFilter, includeAllowableActions, includePolicies, includeRelationships, renditionFilter, includePathSegment, orderBy, maxItems, succinct) {
        this.setPropertyFilter(propertyFilter);
        this.setIncludeAllowableActions(includeAllowableActions);
        this.setIncludePolicies(includePolicies);
        this.setIncludeRelationships(includeRelationships);
        this.setRenditionFilter(renditionFilter);
        this.setIncludePathSegment(includePathSegment);
        this.setOrderBy(orderBy);
        this.setMaxItems(maxItems);
        this.setSuccinct(succinct);
        logger.debug('OperationContext function init() called.');
    };

    return OperationContext;

}(webCmis.util.assert, webCmis.util.logger.getLogger()));