const conformance = require('../resources/conformance');

test('checks conformance resource type', () => {
    expect(conformance.getConformanceStatement().resourceType).toBe("Conformance");
});