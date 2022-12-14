import { comparePair, structPairs } from './utils.js'

export default (arr) => {
  const pairs = structPairs(arr)

  const sortedArr = []

  // returns inserted index
  const sortInsert = (val) => {
    for (let i = 0; i < sortedArr.length; i++) {
      const claimedVal = sortedArr[i]
      if (comparePair(JSON.parse(JSON.stringify(val)), JSON.parse(JSON.stringify(claimedVal)))) {
        sortedArr.splice(i, 0, val)
        return i
      }
    }
    sortedArr.push(val)
    return sortedArr.length - 1
  }
  // insertion sort all pairs
  while (pairs.length) {
    const [left, right] = pairs.shift()
    sortInsert(left)
    sortInsert(right)
  }
  const first = sortInsert([[2]]) + 1
  const second = sortInsert([[6]]) + 1
  return first * second
}
