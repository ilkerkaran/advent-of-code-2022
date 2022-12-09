import { getCoordinatesByLead, headCoordinates } from './utils.js'

export default (arr) => {
  let headCoors = headCoordinates(arr)
  for (let i = 0; i < 9; i++) {
    headCoors = getCoordinatesByLead(headCoors)
  }
  const visitedMap = {}
  for (let i = 0; i < headCoors.length; i++) {
    const element = headCoors[i]
    visitedMap[element] = true
  }
  return Object.keys(visitedMap).length
}
