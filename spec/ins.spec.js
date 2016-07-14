'use strict';

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai');
const expect = chai.expect;

const ins = require('../lib/ins.js');

describe('product', function () {

  it('returns 1 when called without arguments', function () {
    expect(ins.product()).to.equal(1);
  });

  it('returns the argument when called with just one', function () {
    expect(ins.product(42)).to.equal(42);
  });

  it('returns the product of all the arguments', function () {
    expect(ins.product(1, 2, 3, 4, 5)).to.equal(120);
  });

});

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
