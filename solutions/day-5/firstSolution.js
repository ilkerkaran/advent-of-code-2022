
const stacks = []

export default (arr) => {
  const stackLines = arr.slice(0, arr.indexOf(''))
  const stackMap = []
  const commandLines = arr.slice(arr.indexOf('') + 1)

  const move = (blcokCount, from, to) => {
    for (let i = 0; i < blcokCount; i++) {
      const popped = stacks[from].pop()
      stacks[to].push(popped)
    }
  }

  // arrange stacks
  for (let index = stackLines.length - 1; index >= 0; index--) {
    const line = stackLines[index]
    if (index === stackLines.length - 1) {
      for (let j = 0; j < line.length; j++) {
        const c = +line[j]

        if (c) {
          stacks[c] = []
          stackMap[c] = j
        }
      }
    } else {
      for (let i = 1; i < stackMap.length; i++) {
        const itemIndex = stackMap[i]
        const val = line.substring(itemIndex, itemIndex + 1)
        if (val.trim()) {
          stacks[i].push(val)
        }
      }
    }
  }
  console.log('stacks', stacks)
  // execute commands
  for (let i = 0; i < commandLines.length; i++) {
    const [, blockCount,, frm,, to] = commandLines[i].split(' ')
    move(blockCount, frm, to)
    console.log('stacks', blockCount, frm, to, stacks)
  }
  // read last blocks
  return stacks.reduce((str, st) => {
    return str + st[st.length - 1]
  }, '')
}
