
export const structData = (arr) => {
  const valveMap = {}
  for (let i = 0; i < arr.length; i++) {
    const [targetValveData, tunnelData] = arr[i].split(';')
    const [, valve,,, rateRaw] = targetValveData.split(' ')
    const rate = +rateRaw.split('=')[1]
    const valveObj = { id: valve, rate, adj: [] }
    const tunnels = tunnelData.substring(tunnelData.indexOf('valve') + 6).replace(' ', '').split(',').map(x => x.trim())
    valveObj.adj.push(...tunnels)
    valveMap[valve] = valveObj
  }
  const closedValveMap = Object.values(valveMap).filter(v => v.rate).reduce((x, v) => { return { ...x, [v.id]: true } }, {})
  const significantValves = ['AA', ...Object.keys(closedValveMap)]
  const weighedGraph = { AA: { rate: 0, adj: {} } }

  for (let i = 0; i < significantValves.length; i++) {
    const valveName = significantValves[i]
    const v = valveMap[valveName]
    if (!weighedGraph[valveName]) {
      weighedGraph[valveName] = { rate: v.rate, adj: {} }
    }
    for (let j = i + 1; j < significantValves.length; j++) {
      const target = significantValves[j]

      const dist = bfs(valveMap, valveName, target) + 1
      weighedGraph[valveName].adj[target] = dist
      if (valveName !== 'AA') {
        const t = valveMap[target]
        if (!weighedGraph[target]) {
          weighedGraph[target] = { rate: t.rate, adj: {} }
        }
        weighedGraph[target].adj[valveName] = dist
      }
    }
  }

  return weighedGraph
}

export const bfs = (valveMap, src, dest) => {
  const dist = []
  const visited = []
  let queue = []

  visited[src] = true
  dist[src] = 0
  queue.push(src)
  let foundDist
  while (queue.length) {
    const nodeKey = queue.shift()
    const node = valveMap[nodeKey]
    for (let i = 0; i < node.adj.length; i++) {
      const adjKey = node.adj[i]
      if (!visited[adjKey]) {
        visited[adjKey] = true
        dist[adjKey] = (dist[nodeKey] || 0) + 1
        queue.push(adjKey)

        if (adjKey === dest) {
          queue = []
          foundDist = (dist[nodeKey] || 0) + 1
          break
        }
      }
    }
  }
  return foundDist
}
