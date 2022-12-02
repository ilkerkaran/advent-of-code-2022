import assert from 'assert'
import { readFile } from '../utils.js'
import solution from './firstSolution.js'

describe('day1-first', function () {
  it('testInput1 should return 24000', function () {
    const inputArr = readFile('testInput1.txt')
    assert.equal(solution(inputArr), 24000)
  })

  it('input1 should return', function () {
    const inputArr = readFile('input1.txt')
    const actualAns = solution(inputArr)
    console.log('predictedAnswer:', actualAns)
    assert.ok(actualAns)
  })
})
