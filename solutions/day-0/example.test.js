import assert from 'assert'
import example from './example.js'

describe('example', function () {
  it('should return 7', function () {
    assert.equal(example(), 7)
  })
})
