'use strict'

var test = require('tape')
var freq = require('.')

test('empty buffer', function (assert) {
  assert.deepEqual(freq(Buffer([])), Array(256).fill(0))
  assert.end()
})

test('example buffer', function (assert) {
  var expected = Array(256).fill(0)

  expected[0] = 1
  expected[1] = 1
  expected[255] = 1
  expected[127] = 1

  assert.deepEqual(freq(Buffer([0, 257, 255, 127])), expected)
  assert.end()
})
