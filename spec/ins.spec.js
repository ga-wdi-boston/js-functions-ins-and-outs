'use strict';

const ins = require('../lib/ins.js');

describe('product', function() {

  it('returns 1 when called without arguments', function() {
    expect(ins.product()).toBe(1);
  });

  it('returns the argument when called with just one', function() {
    expect(ins.product(42)).toBe(42);
  });

  it('returns the product of all the arguments', function() {
    expect(ins.product(1, 2, 3, 4, 5)).toBe(120);
  });

});

describe('max', function() {

  it('returns undefined when called without arguments', function() {
    expect(ins.max()).toBeUndefined();
  });

  it('returns the argument when called with just one', function() {
    expect(ins.max(42)).toBe(42);
  });

  it('returns the maximum of all the arguments', function() {
    expect(ins.max(-1, -2, -3, -4, -5)).toBe(-1);
  });

});
