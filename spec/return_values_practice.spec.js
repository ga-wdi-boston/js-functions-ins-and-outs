'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const expect = chai.expect

const outs = require('../lib/return_values_practice.js')

describe('createPerson', function () {
  it('returns undefined when called without arguments', function () {
    expect(outs.createPerson()).to.be.undefined
  })
})

describe('counterFactory', function () {
  it('returns undefined when called without arguments', function () {
    expect(outs.counterFactory()).to.be.undefined
  })
})
