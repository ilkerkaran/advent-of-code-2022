import { scannedTile, structData, structSensors } from './utils.js'

export default (arr) => {
 const valveMap = structData(arr)
 console.log("valve",valveMap)
}
