'use strict';

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai');
const expect = chai.expect;

const outs = require('../lib/school_honesty_lab.js');


describe('student', function () {
});

describe('runCheatingScript', function () {

  it('returns undefined when called without arguments', function () {
    expect(outs.runCheatingScript()).to.be.undefined;
  });

});
