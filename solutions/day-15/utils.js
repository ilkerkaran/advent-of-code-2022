export const sensor = 'S'
export const beacon = 'B'
export const scannedTile = '#'

export const md = (i1, j1, i2, j2) =>
  Math.abs(+i1 - +i2) + Math.abs(+j1 - +j2)

export const fillAreaMap = (sensorMap, coor, filler) => {
  const [x, y] = coor
  if (sensorMap[x] === undefined) {
    sensorMap[x] = {}
  }
  sensorMap[x][y] = filler
}

const parseVal = (val) => {
  return val.substring(val.indexOf('at') + 2)
    .trim().split(', ')
    .map(coor => coor.substring(2)).map(c => +c)
}
export const structSensors = (arr, targetY) => {
  const areaMap = {}
  const sensors = []
  for (let i = 0; i < arr.length; i++) {
    const [sensorCoor, beaconCoor] = arr[i].split(':').map(p => parseVal(p.trim()))
    fillAreaMap(areaMap, sensorCoor, sensor)
    fillAreaMap(areaMap, beaconCoor, beacon)
    sensors.push({ coor: sensorCoor, dist: md(...sensorCoor, ...beaconCoor) })
  }

  return [areaMap, sensors]
}
