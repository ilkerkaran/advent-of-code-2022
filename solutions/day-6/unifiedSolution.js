
export default (input, targetLength) => {
  const packet = []

  let curIndex = 0
  for (let i = 0; i < input.length; i++) {
    curIndex = i
    if (packet.length === targetLength) {
      break
    }
    const c = input[i]
    const occureance = packet.indexOf(c)
    if (occureance > -1) {
      packet.splice(0, occureance + 1)
    } packet.push(c)
  }
  return curIndex
}
