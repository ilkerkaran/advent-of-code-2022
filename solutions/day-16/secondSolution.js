
import { structData } from './utils.js'

export default (arr) => {
  const weighedGraph = structData(arr)
  const initialRemainingTime = 26

  const me = {
    name: 'me',
    remainingDistance: 0,
    location: 'AA',
    ready: true
  }

  const e = {
    name: 'elephant',
    remainingDistance: 0,
    location: 'AA',
    ready: false
  }
  let result = 0
  const resultPath = ['', '']
  const visited = {}
  let pathIterationCounter = 0
  let iterationCounter = 0
  console.time('time passed')
  const forwardTime = (actor1, actor2, visited, remainingTime, forwardedTime, carryP, actor1Path, actor2Path) => {
    iterationCounter++
    if (iterationCounter % (1000 * 1000) === 0) {
      console.timeLog('time passed')
      console.log(iterationCounter, 'th iteration')
    }
    visited[actor1.location] = true
    visited[actor2.location] = true
    remainingTime -= forwardedTime

    processActor(actor1, forwardedTime)
    processActor(actor2, forwardedTime)

    let nextActor1s = []
    let nextActor2s = []
    let a1Stop, a2Stop

    if (actor1.stop) {
      nextActor1s.push({ ...actor1 })
    } else if (actor1.ready) {
      const valve = weighedGraph[actor1.location]
      carryP += (valve.rate * (remainingTime))
      actor1Path += remainingTime + ':' + actor1.location + '-'
      nextActor1s = Object.entries(valve.adj).filter(([name, dist]) => !visited[name] && (remainingTime - dist) >= 0).map(([name, dist]) => {
        const newActor1 = { ...actor1, location: name, remainingDistance: dist, ready: false }
        return newActor1
      })
      if (!nextActor1s.length) {
        a1Stop = true
        nextActor1s.push({ ...actor1, stop: true })
      }
    } else {
      nextActor1s.push({ ...actor1 })
    }

    if (actor2.stop) {
      nextActor2s.push({ ...actor2 })
    } else if (actor2.ready) {
      const valve = weighedGraph[actor2.location]
      carryP += (valve.rate * (remainingTime))
      actor2Path += remainingTime + ':' + actor2.location + '-'
      nextActor2s = Object.entries(valve.adj).filter(([name, dist]) => !visited[name] && (remainingTime - dist) >= 0).map(([name, dist]) => {
        const newActor2 = { ...actor2, location: name, remainingDistance: dist, ready: false }
        return newActor2
      })
      if (!nextActor2s.length) {
        a2Stop = true
        nextActor2s.push({ ...actor2, stop: true })
      }
    } else {
      nextActor2s.push({ ...actor2 })
    }

    if (remainingTime <= 0 || ((a1Stop && actor2.stop) || (a2Stop && actor1.stop))) {
      if (carryP > result) {
        resultPath[0] = actor1Path
        resultPath[1] = actor2Path
      }
      result = Math.max(result, carryP)
      pathIterationCounter++
      return
    }
    for (let i = 0; i < nextActor1s.length; i++) {
      const a1 = { ...nextActor1s[i] }
      for (let j = 0; j < nextActor2s.length; j++) {
        const a2 = { ...nextActor2s[j] }

        if (a1.location === a2.location) {
          continue
        }
        const timeLeap = Math.min(a1.stop ? Number.MAX_SAFE_INTEGER : a1.remainingDistance, a2.stop ? Number.MAX_SAFE_INTEGER : a2.remainingDistance)

        forwardTime({ ...a1 }, { ...a2 }, { ...visited }, remainingTime, timeLeap, carryP, actor1Path, actor2Path)
      }
    }
  }

  const processActor = (actor, forwardedTime) => {
    if (!actor.stop) {
      actor.remainingDistance -= forwardedTime
      if (!actor.remainingDistance && !actor.ready) {
        actor.ready = true
      }
    }
  }

  forwardTime(me, e, visited, initialRemainingTime, 0, 0, '', '')
  console.log(pathIterationCounter, resultPath)
  console.timeEnd('time passed')
  return result
}
