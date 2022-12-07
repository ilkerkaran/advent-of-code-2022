
export default (commands, root) => {
  let curNode
  let i = 0
  // struct tree
  while (i < commands.length) {
    const command = commands[i]
    i += 1
    const inputCmd = command.split(' ')[0] === '$'
    if (inputCmd) {
      if (command.split(' ')[1] === 'ls') {
        continue
      } else if (command.split(' ')[1] === 'cd') {
        const p = command.split(' ')[2]
        if (p === '..') {
          // go to parent dir
          curNode = curNode.up
        } else if (p === '/') {
          // go to root
          curNode = root
        } else {
          curNode = curNode.dir.find(folder => folder.name === p)
          // go to dir
        }
      }
    } else {
      const [first, second] = command.split(' ')
      if (+first) {
        const file = { name: second, size: +first, up: curNode }
        curNode.dir.push(file)
      } else {
        const folder = { name: second, size: 0, up: curNode, dir: [] }
        curNode.dir.push(folder)
      }
    }
  }
}
