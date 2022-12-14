export const rock = '#'
export const sand = 'o'
export const air = '.'

export const checkLocation = (caveMap, x, y) =>
  caveMap[x] && caveMap[x][y]

export const fillCaveMap = (caveMap, coor, filler) => {
  const [x, y] = coor
  if (caveMap[x] === undefined) {
    caveMap[x] = {}
  }
  caveMap[x][y] = filler
}

export const structCave = (arr, withBoundaries) => {
  const caveMap = {}
  let deepestY = Number.MIN_SAFE_INTEGER

  const execCommand = (cmd) => {
    const commandMap = cmd.split(' -> ')
    let fromIndex = 0
    let from = commandMap[fromIndex].split(',')
    let to = commandMap[fromIndex + 1].split(',')

    do {
      const [fromX, fromY] = from
      const [toX, toY] = to
      if (fromX === toX) {
        const newFrom = Math.min(fromY, toY)
        const newTo = Math.max(fromY, toY)
        for (let j = 0; j < newTo - newFrom + 1; j++) {
          deepestY = Math.max(deepestY, newFrom + j)
          fillCaveMap(caveMap, [fromX, newFrom + j], rock)
        }
      } else if (fromY === toY) {
        const newFrom = Math.min(fromX, toX)
        const newTo = Math.max(fromX, toX)
        for (let j = 0; j < newTo - newFrom + 1; j++) {
          deepestY = Math.max(deepestY, fromY)
          fillCaveMap(caveMap, [newFrom + j, fromY], rock)
        }
      }
      fromIndex++
      from = commandMap[fromIndex].split(',')
      to = commandMap[fromIndex + 1]?.split(',')
    } while (to)
  }

  for (let i = 0; i < arr.length; i++) {
    const commandLine = arr[i]
    execCommand(commandLine)
  }

  // draw boundaries
  if (withBoundaries) {
    const realFloorY = deepestY + 2

    const leftX = 500 - realFloorY
    const rightX = 500 + realFloorY

    const boundaryCommand = `${leftX},0 -> ${leftX},${realFloorY} -> ${rightX},${realFloorY} -> ${rightX},0`
    execCommand(boundaryCommand)
  }
  return [caveMap, deepestY]
}
