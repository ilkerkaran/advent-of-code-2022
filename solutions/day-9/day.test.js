import { assertSolution, assertTest, getFileP } from '../utils.js'
import first from './firstSolution.js'
import second from './secondSolution.js'

const dayName = 'day9'

describe(`${dayName}-first`, function () {
  const func = first
  assertTest(getFileP('testinput0'), func, 13)
  assertSolution(getFileP('input'), func)
})

describe(`${dayName}-second`, function () {
  const func = second
  assertTest(getFileP('testinput0'), func, 1)
  assertTest(getFileP('testinput1'), func, 36)
  assertSolution(getFileP('input'), func)
})
