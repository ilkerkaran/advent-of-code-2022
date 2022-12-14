import { comparePair, structPairs } from './utils.js'

export default (arr) => {
  const pairs = structPairs(arr)

  let sum = 0
  let pairIndex = 0

  while (pairs.length) {
    pairIndex++

    const [left, right] = pairs.shift()
    const pairRes = comparePair(left, right)
    if (pairRes) {
      sum += pairIndex
    }
  }

  return sum
}
