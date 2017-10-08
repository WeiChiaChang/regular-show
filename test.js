// test.js
var should = require('should');
var regularShow = require('./');

describe('array is valid or not', function () {
  it('should return at least one name', function (done) {
    (regularShow().length > 0).should.be.true;
    (Array.isArray(regularShow().names)).should.be.true;
    (regularShow.names[4].length > 0).should.be.true;
    done();
  })
})