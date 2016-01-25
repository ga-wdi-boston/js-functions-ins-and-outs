'use strict';

const outs = require('../lib/outs.js');

describe('createArray', function() {

  it('returns 1 when called without arguments', function() {
    expect(outs.product()).toBe(1);
  });

});

describe('mergeConfig', function() {

  it('returns undefined when called without arguments', function() {
    expect(outs.mergeConfig()).toBeUndefined();
  });

  it('returns the argument when called with just one', function() {
    expect(outs.mergeConfig(42)).toBe(42);
  });

  it('returns the mergeConfigimum of all the arguments', function() {
    expect(outs.mergeConfig(-1, -2, -3, -4, -5)).toBe(-1);
  });

});
