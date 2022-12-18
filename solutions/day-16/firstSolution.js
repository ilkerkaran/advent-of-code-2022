
import { structData } from './utils.js'

export default (arr) => {
  const weighedGraph = structData(arr)
  const initialRemainingTime = 30
  let correctOrder = ''
  const possibleRoutes = {}
  let result = 0
  const traverse = (valveName, distance, visited, remainingTime, p, order) => {
    remainingTime -= distance
    const valve = weighedGraph[valveName]

    const adjs = Object.entries(valve.adj)
    if (remainingTime <= 0 || visited[valveName]) {
      possibleRoutes[order] = Math.max(result, p)
      if (result < p) { correctOrder = order }
      result = Math.max(result, p)

      return
    }
    order = `${order}${valveName}-`
    visited[valveName] = true

    p += (valve.rate * (remainingTime + 1))
    for (let i = 0; i < adjs.length; i++) {
      const [nextValve, dist] = adjs[i]

      traverse(nextValve, dist, { ...visited }, remainingTime, p, order)
    }
  }
  console.log('g', weighedGraph)
  traverse('AA', 1, {}, initialRemainingTime, 0, '')
  correctOrder = correctOrder.substring(0, correctOrder.length - 1)
  console.log(correctOrder)

  return result
}
