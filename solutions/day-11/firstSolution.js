import { structMonkeys } from './utils.js'

export default (arr) => {
  const monkeys = structMonkeys(arr)
  const monkeyItems = {}

  for (let r = 0; r < 20; r++) {
    for (let i = 0; i < monkeys.length; i++) {
      const monkey = monkeys[i]
      while (monkey.items?.length) {
        monkeyItems[i] = (monkeyItems[i] || 0) + 1
        let item = monkey.items.shift()
        item = monkey.operation(item)
        item = Math.floor(item / 3)
        if ((item % monkey.divisable) === 0) {
          monkeys[monkey.pTarget].items.push(item)
        } else {
          monkeys[monkey.nTarget].items.push(item)
        }
      }
    }
  }
  const x = Object.values(monkeyItems)
  x.sort((a, b) => b - a)
  return x[0] * x[1]
}
