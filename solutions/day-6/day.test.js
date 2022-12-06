import assert from 'assert'
import { readFile } from '../utils.js'
import first from './firstSolution.js'
import second from './secondSolution.js'

const dayName = 'day6'

describe(`${dayName}-first`, function () {
  it('testInput0 should return expected', function () {
    const inputArr = readFile('testInput0')
    assert.equal(first(inputArr), 7)
  })

  it('testInput1 should return expected', function () {
    const inputArr = readFile('testInput1.txt')
    assert.equal(first(inputArr), 5)
  })

  it('testInput2 should return expected', function () {
    const inputArr = readFile('testInput2')
    assert.equal(first(inputArr), 6)
  })

  it('testInput3 should return expected', function () {
    const inputArr = readFile('testInput3')
    assert.equal(first(inputArr), 10)
  })

  it('testInput4 should return expected', function () {
    const inputArr = readFile('testInput4')
    assert.equal(first(inputArr), 11)
  })

  it('input1 should return', function () {
    const inputArr = readFile('input1.txt')
    const actualAns = first(inputArr)
    console.log('predictedAnswer:', actualAns)
    assert.ok(actualAns)
  })
})

describe(`${dayName}-second`, function () {
  it('testInput0 should return expected', function () {
    const inputArr = readFile('testInput0')
    assert.equal(second(inputArr), 19)
  })

  it('testInput1 should return expected', function () {
    const inputArr = readFile('testInput1.txt')
    assert.equal(second(inputArr), 23)
  })

  it('testInput2 should return expected', function () {
    const inputArr = readFile('testInput2')
    assert.equal(second(inputArr), 23)
  })

  it('testInput3 should return expected', function () {
    const inputArr = readFile('testInput3')
    assert.equal(second(inputArr), 29)
  })

  it('testInput4 should return expected', function () {
    const inputArr = readFile('testInput4')
    assert.equal(second(inputArr), 26)
  })

  it('input1 should return', function () {
    const inputArr = readFile('input1.txt')
    const actualAns = second(inputArr)
    console.log('predictedAnswer:', actualAns)
    assert.ok(actualAns)
  })
})
