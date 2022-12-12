import { getIndexes, getK, structStepGraph } from './utils'

export default (arr) => {
  const maxSteps = arr.length * arr[0].length
  const [stepGraph, start, end] = structStepGraph(arr)

  const resSteps = maxSteps
  const visitedSteps = {}
  const takeNextStep = (addr, curStep) => {
    visitedSteps[addr] = true

    if (end === addr) {
      return curStep
    } else {
      const stepW = stepGraph[addr]
      curStep++
      const [i, j] = getIndexes(addr)
      // check up
      const upAddr = getK(i - 1, j)
      if (stepGraph[upAddr] &&
        stepW - 1 <= stepGraph[upAddr] &&
        stepW + 1 >= stepGraph[upAddr] &&
        !visitedSteps[upAddr]) {
        curStep += takeNextStep(upAddr, curStep)
      }
      // check down
      const downAddr = getK(i + 1, j)
      if (stepGraph[downAddr] &&
        stepW - 1 <= stepGraph[downAddr] &&
        stepW + 1 >= stepGraph[downAddr] &&
         !visitedSteps[downAddr]) {
        curStep += takeNextStep(downAddr, curStep)
      }
      // check left
      const leftAddr = getK(i, j + 1)
      if (stepGraph[leftAddr] &&
        stepW - 1 <= stepGraph[leftAddr] &&
        stepW + 1 >= stepGraph[leftAddr] &&
         !visitedSteps[leftAddr]) {
        curStep += takeNextStep(leftAddr, curStep)
      }
      // check right
      const rightAddr = getK(i, j - 1)
      if (stepGraph[rightAddr] &&
        stepW - 1 <= stepGraph[rightAddr] &&
        stepW + 1 >= stepGraph[rightAddr] &&
         !visitedSteps[rightAddr]) {
        curStep += takeNextStep(rightAddr, curStep)
      }

      return takeNextStep(start, 0)
    }
  }

  return resSteps
}
