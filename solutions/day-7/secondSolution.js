import structTree from './structTree.js'

export default (arr) => {
  const root = { size: 0, dir: [], name: '/', up: undefined }

  structTree(arr, root)

  const directorySizes = []
  // calculate sizes
  const calculateNode = (node) => {
    let sum = node.size
    if (node.dir) {
      for (let i = 0; i < node.dir.length; i++) {
        const element = node.dir[i]
        sum += calculateNode(element)
      }
      node.size = sum
      directorySizes.push(sum)
    }
    return sum
  }
  calculateNode(root)

  const curFreeSpace = 70000000 - root.size
  const minReqCleanSpace = 30000000 - curFreeSpace
  const minDirSize = Math.min(...directorySizes.filter(s => +s > +minReqCleanSpace))
  return minDirSize
}
