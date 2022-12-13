export const getK = (i, j) => `${i}_${j}`
export const getIndexes = (k) => k.split('_').map(index => +index)
export const structStepGraph = (arr) => {
  const steps = {}
  let start, end
  for (let i = 0; i < arr.length; i++) {
    const line = arr[i]
    line.split('').map((c, j) => {
      const node = { adj: [] }
      if (c === 'S') {
        start = getK(i, j)
        node.val = 0
      } else if (c === 'E') {
        end = getK(i, j)
        node.val = 'z'.charCodeAt() - 95
      } else {
        node.val = c.charCodeAt() - 96
      }
      steps[getK(i, j)] = node
    })
  }

  const adjCheck = (target, cur) => (target &&
    (+target.val <= (+cur.val + 1)))
  // fill adj
  Object.entries(steps).map(([k, node]) => {
    const [i, j] = getIndexes(k)
    const upNode = steps[getK(i - 1, j)]
    const downNode = steps[getK(i + 1, j)]
    const rightNode = steps[getK(i, j + 1)]
    const leftNode = steps[getK(i, j - 1)]
    // check up
    if (adjCheck(upNode, node)) {
      node.adj.push(getK(i - 1, j))
    }
    // check down
    if (adjCheck(downNode, node)) {
      node.adj.push(getK(i + 1, j))
    }
    // check right
    if (adjCheck(rightNode, node)) {
      node.adj.push(getK(i, j + 1))
    }
    // check left
    if (adjCheck(leftNode, node)) {
      node.adj.push(getK(i, j - 1))
    }
  })

  return [steps, start, end]
}
