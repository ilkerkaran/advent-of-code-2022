import { structCave, checkLocation, fillCaveMap, sand } from './utils.js'

export default (arr) => {
  const [caveMap, deepestpoint] = structCave(arr)

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
    if (landedCoor) {
      fillCaveMap(caveMap, landedCoor, sand)
      landedCount++
    }
  } while (landedCoor)
  return landedCount
}
