'use strict';

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai');
const expect = chai.expect;

const ins = require('../lib/arguments_practice.js');

describe('max', function () {

  it('returns undefined when called without arguments', function () {
    expect(ins.max()).to.be.undefined;
  });

  it('returns the argument when called with just one', function () {
    expect(ins.max(42)).to.equal(42);
  });

  it('returns the maximum of all the arguments', function () {
    expect(ins.max(-1, -2, -3, -4, -5)).to.equal(-1);
  });

});

describe('maxOfArray', function () {

  it('returns undefined when called without arguments', function () {
    expect(ins.maxOfArray()).to.be.undefined;
  });

  it('returns the number when called with just one', function () {
    expect(ins.maxOfArray([4])).to.equal(4);
  });

  it('returns the maximum of all the arguments', function () {
    expect(ins.max([-1, -2, -3, -4, -5])).to.equal(-1);
  });

});

describe('addProperty', function () {

  it('returns undefined when called without arguments', function () {
    expect(ins.addProperty()).to.be.undefined;
  });


});
