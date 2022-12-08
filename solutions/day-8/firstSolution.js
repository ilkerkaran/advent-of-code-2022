import { getK, structForest } from './structTree.js'

export default (arr) => {
  const x = arr[0].length
  const y = arr.length
  // struct map
  const treeMap = structForest(arr)

  const getTree = (i, j) => treeMap[getK(i, j)]

  const visibleTrees = {}
  // look from left
  for (let i = 0; i < x; i++) {
    let curMax = -1
    for (let j = 0; j < y; j++) {
      const curTree = getTree(i, j)
      if (curTree > curMax) {
        visibleTrees[getK(i, j)] = true
        curMax = curTree
      }
    }
  }

  // look from top
  for (let j = 0; j < y; j++) {
    let curMax = -1
    for (let i = 0; i < x; i++) {
      const curTree = getTree(i, j)
      if (curTree > curMax) {
        visibleTrees[getK(i, j)] = true
        curMax = curTree
      }
    }
  }

  // look from right
  for (let i = 0; i < x; i++) {
    let curMax = -1
    for (let j = 0; j < y; j++) {
      const curTree = getTree(i, y - j - 1)

      if (curTree > curMax) {
        visibleTrees[getK(i, y - j - 1)] = true
        curMax = curTree
      }
    }
  }
  // look from bottom
  for (let j = 0; j < y; j++) {
    let curMax = -1
    for (let i = 0; i < x; i++) {
      const curTree = getTree(x - i - 1, j)
      if (curTree > curMax) {
        visibleTrees[getK(x - i - 1, j)] = true
        curMax = curTree
      }
    }
  }
  return Object.keys(visibleTrees).length
}
