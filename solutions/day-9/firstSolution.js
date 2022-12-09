import { getCoordinatesByLead, headCoordinates } from './utils.js'

export default (arr) => {
  const headCoors = headCoordinates(arr)
  const visitedMap = {}
  const coors = getCoordinatesByLead(headCoors)
  for (let i = 0; i < coors.length; i++) {
    const element = coors[i]
    visitedMap[element] = true
  }
  return Object.keys(visitedMap).length
}
