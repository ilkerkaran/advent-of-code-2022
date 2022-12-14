import { assertSolution, assertTest, getFileP } from '../utils.js'
import first from './firstSolution.js'
import second from './secondSolution.js'

const dayName = 'day12'

describe(`${dayName}-first`, function () {
  const func = first
  assertTest(getFileP('testinput0'), func, 31)
  assertSolution(getFileP('input'), func)
})

describe(`${dayName}-second`, function () {
  const func = second
  assertTest(getFileP('testinput0'), func, 29)
  assertSolution(getFileP('input'), func)
  assertSolution(getFileP('input1'), func)
})

describe(`${dayName}-t0`, function () {
  this.timeout(20000)
  const func = second
  assertSolution(getFileP('input'), func)
})
describe(`${dayName}-t1`, function () {
  this.timeout(20000)
  const func = second
  assertSolution(getFileP('input1'), func)
})
