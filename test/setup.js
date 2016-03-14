const jsdom = require('jsdom').jsdom
const exposedProperties = ['window', 'navigator', 'document']

const sinon = require('sinon')
const chai = require('chai')
const sinonChai = require('sinon-chai')

before(function () {
  chai.use(sinonChai)
})

beforeEach(function () {
  this.sandbox = sinon.sandbox.create()
})

afterEach(function () {
  this.sandbox.restore()
})

// https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md#using-enzyme-with-jsdom
global.document = jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}

global.documentRef = document
