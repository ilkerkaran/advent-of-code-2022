
export default (arr) => {
  const commands = [...arr]
  let remainingCycleWork = 0
  let remVal = 0
  let X = 1

  let res = 0
  for (let cycle = 0; cycle <= 220; cycle++) {
    if (((cycle % 40) - 20) === 0) {
      res += cycle * X
    }
    if (remainingCycleWork > 0) {
      remainingCycleWork--
    } else {
      X += remVal

      const [command, val] = commands.shift().split(' ')
      remainingCycleWork = command === 'noop' ? 0 : 1
      if (+val) {
        remVal = +val
      } else {
        remVal = 0
      }
    }
  }
  return res
}
