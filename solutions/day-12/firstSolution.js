import { structStepGraph } from './utils.js'
const getIndex = (k, lc) => {
  const [i, j] = k.split('_').map(n => +n)
  return i * lc + j
}
export default (arr) => {
  const [stepGraph, start, end] = structStepGraph(arr)

  const offset = arr[0].length

  const print = () => {
    return Object.values(stepGraph).reduce((str, v, i) => { return str + (v.val > 9 ? `|${v.val}` : `| ${v.val}`) + (((i + 1) % offset === 0) ? '\n' : '') }, '')
  }
  const dist = []
  const visited = []
  const bfs = (src, dest) => {
    let queue = []

    visited[getIndex(src, offset)] = true
    dist[getIndex(src, offset)] = 0
    queue.push(src)

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
            console.log('found it')
            queue = []
            break
          }
        }
      }
    }
  }

  bfs(start, end)
  // console.log(dist)
  console.log(print())
  return dist[getIndex(end, offset)]
}
