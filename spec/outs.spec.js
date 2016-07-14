'use strict';

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai');
const expect = chai.expect;

const outs = require('../lib/outs.js');

describe('createArray', function () {

  it('returns empty array when called without arguments', function () {
    expect(outs.createArray()).to.deep.equal([]);
  });

});

describe('createPerson', function () {

  it('returns undefined when called without arguments', function () {
    expect(outs.createPerson()).to.be.undefined;
  });

});
