import assert from 'assert'
import { readFile } from '../utils.js'
import first from './firstSolution.js'
import second from './secondSolution.js'

const dayName = 'day5'

describe(`${dayName}-first`, function () {
  it('testInput1 should return expected', function () {
    const inputArr = readFile('testInput1.txt')
    assert.equal(first(inputArr), 'CMZ')
  })

  it('input1 should return', function () {
    const inputArr = readFile('input1.txt')
    const actualAns = first(inputArr)
    console.log('predictedAnswer:', actualAns)
    assert.ok(actualAns)
  })
})

describe(`${dayName}-second`, function () {
  it('testInput1 should return expected', function () {
    const inputArr = readFile('testInput1.txt')
    assert.equal(second(inputArr), 'MCD')
  })

  it('input1 should return', function () {
    const inputArr = readFile('input1.txt')
    const actualAns = second(inputArr)
    console.log('predictedAnswer:', actualAns)
    assert.ok(actualAns)
  })
})
