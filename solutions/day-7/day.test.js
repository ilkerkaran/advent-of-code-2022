import { assertSolution, assertTest, getFileP } from '../utils.js'
import first from './firstSolution.js'
import second from './secondSolution.js'

const dayName = 'day7'

describe(`${dayName}-first`, function () {
  const func = first
  assertTest(getFileP('testinput0'), func, 95437)
  assertSolution(getFileP('input'), func)
})

describe(`${dayName}-second`, function () {
  const func = second
  assertTest(getFileP('testinput0'), func, 24933642)
  assertSolution(getFileP('input'), func)
})
