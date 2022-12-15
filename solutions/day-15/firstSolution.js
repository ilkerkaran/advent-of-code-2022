import { scannedTile, structSensors } from './utils.js'

export default (arr, targetY) => {
  const [areaMap, sensors] = structSensors(arr)
  const coveredRow = {}

  // check for each sensors coverage of the target row
  for (let i = 0; i < sensors.length; i++) {
    const sensor = sensors[i]
    const [sensorX, sensorY] = sensor.coor
    // check if it reaches to target row
    const minDistToTarget = Math.abs(sensorY - targetY)

    const setCoveredRow = (x) => {
      if (!areaMap[x] || !areaMap[x][targetY]) {
        coveredRow[x] = scannedTile
      } else coveredRow[x] = areaMap[x][targetY]
    }

    if (minDistToTarget <= sensor.dist) {
      for (let xOffset = 0; xOffset <= sensor.dist - minDistToTarget; xOffset++) {
        // check left side
        setCoveredRow(sensorX - xOffset)
        // check right side
        setCoveredRow(sensorX + xOffset)
      }
    }
  }
  return Object.values(coveredRow).filter(r => r === scannedTile).length
}
