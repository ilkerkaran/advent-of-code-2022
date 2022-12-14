import { structStepGraph } from './utils.js'
const getIndex = (k, lc) => {
  const [i, j] = k.split('_').map(n => +n)
  return i * lc + j
}
export default (arr) => {
  const [stepGraph, , end] = structStepGraph(arr)

  const offset = arr[0].length
  let runCount = 0
  const maxSteps = offset * arr.length
  let minSteps = maxSteps
  const bfs = (src, dest) => {
    runCount++
    const dist = []
    const visited = []
    let queue = []

    visited[getIndex(src, offset)] = true
    dist[getIndex(src, offset)] = 0
    queue.push(src)
    let foundDist
    while (queue.length) {
      const nodeKey = queue.shift()
      const node = stepGraph[nodeKey]
      for (let i = 0; i < node.adj.length; i++) {
        const adjKey = node.adj[i]
        if (!visited[getIndex(adjKey, offset)]) {
          visited[getIndex(adjKey, offset)] = true
          dist[getIndex(adjKey, offset)] = (dist[getIndex(nodeKey, offset)] || 0) + 1
          queue.push(adjKey)

          if (adjKey === dest) {
            queue = []
            foundDist = (dist[getIndex(nodeKey, offset)] || 0) + 1
            break
          }
        }
      }
    }
    return foundDist || maxSteps
  }

  Object.keys(stepGraph).map(nodeKey => {
    if (stepGraph[nodeKey].val === 1) {
      minSteps = Math.min(minSteps, bfs(nodeKey, end))
    }
  })

  return minSteps
}
