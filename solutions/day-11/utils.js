export const structMonkeys = (arr) => {
  const monkeys = []
  let curMonkey
  for (let i = 0; i < arr.length; i++) {
    const line = arr[i]
    switch (i % 7) {
      case 0 :curMonkey = { monkey: +line.substring(0, line.indexOf(':')).split(' ')[1] }
        monkeys.push(curMonkey)
        break
      case 1 : curMonkey.items = line.substring(line.indexOf(':') + 1).replace(' ', '').split(',').map(n => +n)
        break
      case 2: curMonkey.operation = (old) =>
        +eval(`${line.substring(line.indexOf('=') + 1).replace(' ', '')}`)
        break
      case 3: curMonkey.divisable = +line.trim().split(' ')[3].trim()
        break
      case 4 : curMonkey.pTarget = +line.trim().split(' ')[5].trim()
        break
      case 5 : curMonkey.nTarget = +line.trim().split(' ')[5].trim()
        break
    }
  }
  return monkeys
}
