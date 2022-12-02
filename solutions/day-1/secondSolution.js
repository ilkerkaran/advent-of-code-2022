
export default (elfPockets) => {
  let first = 0; let second = 0; let third = 0
  let curCal = 0

  const shift = (claimedMax) => {
    if (claimedMax > first) {
      third = second
      second = first
      first = claimedMax
    } else if (claimedMax > second) {
      third = second
      second = claimedMax
    } else if (claimedMax > third) {
      third = claimedMax
    }
  }

  elfPockets.map(c => {
    if (c) {
      curCal += +c
    } else {
      shift(curCal)
      curCal = 0
    }
    return 0
  })
  shift(curCal)
  return first + second + third
}
