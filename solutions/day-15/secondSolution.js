import { structSensors } from './utils.js'

export default (arr, limitation) => {
  const [, sensors] = structSensors(arr)

  const unscannedTiles = []

  for (let i = 0; i <= limitation; i++) {
    unscannedTiles.push([[0, limitation]])
  }

  const mergeScannedRange = (y, fromX, toX) => {

    const targetRow = unscannedTiles[y]
    const s = []
    const e = []
    const q = []
    const newRanges = []
    for (let i = 0; i < targetRow?.length || 0; i++) {
      const [f, t] = targetRow[i]
      if (f === fromX && t === toX) {
        continue
      } else if (t < fromX) {
        s.push([f, t])
      } else if (f > toX) {
        e.push([f, t])
      } else {
        q.push([f, t])
      }
    }
      // solve q
      if (q.length) {
        const [leftFrom] = q[0]
        const [, rightTo] = q[q.length - 1]
        if (leftFrom < fromX) {
          newRanges.push([leftFrom, fromX - 1])
        }
        if (rightTo > toX) {
          newRanges.push([toX + 1, rightTo])
        }
       
      }
      const newRowRange = [...s, newRanges, ...e].filter(x =>x && x.length)
      // restruct target row unscanned tiles
      unscannedTiles[y] = newRowRange.length ? [...s, ...newRanges, ...e] : undefined


    
  }

  const printUnscannedTiles = (...args) => {
    console.log(...args)
    for (let i = 0; i < unscannedTiles.length; i++) {
      const element = unscannedTiles[i];
      console.log(`row-${i}`, element)
    }
  }

  for (let i = 0; i < sensors.length; i++) {
    const s = sensors[i]
    const [x, y] = s.coor
    const topY = Math.max(0, y - s.dist)
    const bottomY = Math.min(y + s.dist, limitation)
    // start removing scanned tiles from top to bottom from unscannedTiles
    for (let curY = topY; curY <= bottomY; curY++) {  
        const yDist = Math.abs(y - curY)
        const xOffset = Math.abs(s.dist - yDist)
        const fromX = Math.max(0, x - xOffset)
        const toX = Math.min(x + xOffset, limitation)
        mergeScannedRange(curY, fromX, toX)     
    }
  }
  for (let i = 0; i < unscannedTiles.length; i++) {
    const row = unscannedTiles[i];
    if(row)
    return 4000000 * row[0][0]+ i 
  }
}