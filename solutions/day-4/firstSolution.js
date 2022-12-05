export default (arr) => {
  return arr.reduce((sum, pair) => {
    const [firstElf, seondlf] = pair.split(',')
    const [fs, fe] = firstElf.split('-')

    const [ss, se] = seondlf.split('-')
    let curOverlaps = 0
    if ((+fs <= +ss && +fe >= +se) || (+ss <= +fs && +se >= +fe)) { curOverlaps = 1 }
    return sum + curOverlaps
  }, 0)
}
