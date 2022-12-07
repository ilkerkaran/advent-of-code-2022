import structTree from './structTree.js'

export default (arr) => {
  const root = { size: 0, dir: [], name: '/', up: undefined }

  structTree(arr, root)

  let res = 0
  // calculate sizes
  const calculateNode = (node) => {
    let sum = node.size
    if (node.dir) {
      for (let i = 0; i < node.dir.length; i++) {
        const element = node.dir[i]
        sum += calculateNode(element)
      }
      if (sum < 100000) { res += sum }
    }
    return sum
  }

  calculateNode(root)

  return res
}
