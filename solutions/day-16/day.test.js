import { assertSolution, assertTest, getFileP } from '../utils.js'
import first from './firstSolution.js'
import second from './secondSolution.js'

const dayName = 'day16'

describe(`${dayName}-first`, function () {
  const func = first
  assertTest(getFileP('testinput0'), func, 26)
  // assertSolution(getFileP('input'), func)
})

describe(`${dayName}-second`, function () {
  const func = second
   assertTest(getFileP('testinput0'), func, 56000011, [20])
   assertSolution(getFileP('input'), func,[4000000])
})
