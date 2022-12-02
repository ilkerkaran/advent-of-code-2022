import assert from 'assert'
import { readFile } from '../utils.js'
import solution from './secondSolution.js'

describe('day2-second', function () {
  it('testInput1 should return expected', function () {
    const inputArr = readFile('testInput1.txt')
    assert.equal(solution(inputArr), 12)
  })

  it('input1 test', function () {
    const inputArr = readFile('input1.txt')
    const actualAns = solution(inputArr)
    console.log('predictedAnswer:', actualAns)
    assert.ok(actualAns)
  })
})
