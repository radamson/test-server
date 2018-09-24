const conformance = {};

conformance.resourceType = "Conformance";
conformance.format = "json";

module.exports = {
    getConformanceStatement: function () {
        return conformance;
    }
};