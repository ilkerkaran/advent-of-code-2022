
export const headCoordinates = (arr) => {
  const coors = ['0 0']
  let x = 0; let y = 0
  coors.push(`${x} ${y}`)
  for (let i = 0; i < arr.length; i++) {
    const [direction, steps] = arr[i].split(' ')
    for (let j = 0; j < steps; j++) {
      if (direction === 'R') { y++ } else if (direction === 'L') { y-- }
      if (direction === 'D') { x++ }
      if (direction === 'U') { x-- }
      coors.push(`${x} ${y}`)
    }
  }
  return coors
}

export const getCoordinatesByLead = (headCoors) => {
  const coors = []
  let x = 0; let y = 0
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
    const newCoor = `${x} ${y}`
    if (coors[coors.length - 1] !== newCoor) {
      coors.push(newCoor)
    }
  }
  return coors
}
