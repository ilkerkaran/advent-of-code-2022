import { assertSolution, assertTest, getFileP } from '../utils.js'
import first from './firstSolution.js'
import second from './secondSolution.js'

const dayName = 'day6'

describe(`${dayName}-first`, function () {
  const func = first
  assertTest(getFileP('testinput0'), func, 7)
  assertTest(getFileP('testinput1'), func, 5)
  assertTest(getFileP('testinput2'), func, 6)
  assertTest(getFileP('testinput3'), func, 10)
  assertTest(getFileP('testinput4'), func, 11)
  assertSolution(getFileP('input'), func)
})

describe(`${dayName}-second`, function () {
  const func = second
  assertTest(getFileP('testinput0'), func, 19)
  assertTest(getFileP('testinput1'), func, 23)
  assertTest(getFileP('testinput2'), func, 23)
  assertTest(getFileP('testinput3'), func, 29)
  assertTest(getFileP('testinput4'), func, 26)
  assertSolution(getFileP('input'), func)
})
