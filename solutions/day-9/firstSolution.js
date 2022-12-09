import { headCoordinates } from './utils.js'

export default (arr) => {
  const headCoors = headCoordinates(arr)
  let x = 0; let y = 0
  const visitedMap = {}
  for (let i = 0; i < headCoors.length; i++) {
    const [headX, headY] = headCoors[i].split(' ')
    if (headX > x + 1) {
      x++
      if (headY > y) {
        y++
      } else if (headY < y) {
        y--
      }
    } else if (headX < x - 1) {
      x--
      if (headY > y) {
        y++
      } else if ((headY < y)) {
        y--
      }
    } else if (headY > y + 1) {
      y++
      if (headX > x) {
        x++
      } else if (headX < x) {
        x--
      }
    } else if (headY < y - 1) {
      y--
      if (headX > x) {
        x++
      } else if (headX < x) {
        x--
      }
    }
    visitedMap[`${x} ${y}`] = true
  }
  return Object.keys(visitedMap).length
}
