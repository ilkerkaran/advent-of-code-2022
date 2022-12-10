export default (arr) => {
  const commands = [...arr]
  let remainingCycleWork = 0
  let remVal = 0
  let X = 1
  let crt = '\n'
  for (let cycle = 0; cycle <= 240; cycle++) {
    if (remainingCycleWork > 0) {
      remainingCycleWork--
    } else {
      X += remVal
      if (commands.length) {
        const [command, val] = commands.shift().split(' ')
        remainingCycleWork = command === 'noop' ? 0 : 1
        if (+val) {
          remVal = +val
        } else {
          remVal = 0
        }
      }
    }

    // draw CRT

    const crtIndex = cycle % 40

    if (crtIndex >= X - 1 && crtIndex <= X + 1) {
      crt += 'x'
    } else crt += ' '
    if (crtIndex === 39) {
      crt += '\n'
    }
  }

  console.log(crt)
  return crt
}
