var doco = require('..');
var assert = require('assert');

describe('schema-components', function() {
  it('should be available as a JS object', function() {
    assert(doco.defines);
  });
});
