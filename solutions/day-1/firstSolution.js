
export default (elfPockets) => {
  let max = 0
  let curCal = 0
  elfPockets.map(c => {
    if (c) {
      curCal += +c
    } else {
      max = Math.max(max, curCal)
      curCal = 0
    }
    return 0
  })
  max = Math.max(max, curCal)
  return max
}
