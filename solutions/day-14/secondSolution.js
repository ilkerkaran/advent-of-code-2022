import { structCave, checkLocation, fillCaveMap, sand } from './utils.js'

export default (arr) => {
  const [caveMap, deepestpoint] = structCave(arr, true)
  const originPoint = [500, 0]
  // returns sand landing coordinates
  const processLanding = (caveMap, fallCoor = [500, 0]) => {
    let [curX, curY] = fallCoor
    while (deepestpoint > curY) {
      // try to fall down
      if (!checkLocation(caveMap, curX, curY + 1)) {
        curY++
      }
      // try to fall down left
      else if (!checkLocation(caveMap, curX - 1, curY + 1)) {
        curY++
        curX--
      }
      // try to fall down right
      else if (!checkLocation(caveMap, curX + 1, curY + 1)) {
        curY++
        curX++
      } else return [curX, curY]
    }
    return false
  }

  let landedCoor
  let landedCount = 0
  do {
    landedCoor = processLanding(caveMap, [500, 0])
    fillCaveMap(caveMap, landedCoor, sand)
    landedCount++
  } while (landedCoor[0] !== originPoint[0] || landedCoor[1] !== originPoint[1])
  return landedCount
}
