export const getK = (i, j) => `${i}_${j}`
export const getIndexes = (k) => k.split('_')
export const structStepGraph = (arr) => {
  const steps = {}
  let start, end
  for (let i = 0; i < arr.length; i++) {
    const line = arr[i]
    line.split('').map((c, j) => {
      if (c === 'S') {
        start = getK(i, j)
        steps[getK(i, j)] = 0
      } else if (c === 'E') {
        end = getK(i, j)
        steps[getK(i, j)] = 'z'.charCodeAt() - 95
      } else {
        steps[getK(i, j)] = c.charCodeAt() - 96
      }
    })
  }
  return [steps, start, end]
}
