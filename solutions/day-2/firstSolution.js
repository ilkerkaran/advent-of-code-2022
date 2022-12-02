
const fMap = {
  A: 'r',
  B: 'p',
  C: 's'
}

const sMap = {
  X: 'r',
  Y: 'p',
  Z: 's'
}

const scoreMap = {
  r: 1,
  p: 2,
  s: 3
}

const res = (f, s) => {
  if (f === s) {
    return 3
  } else if ((f === 'r' && s === 's') ||
  (f === 's' && s === 'p') ||
  (f === 'p' && s === 'r')) {
    return 6
  } else return 0
}

export default (arr) => {
  return arr.reduce((curScore, round) => {
    const [f, s] = round.split(' ')
    const opponent = fMap[f]
    const me = sMap[s]
    return curScore + scoreMap[me] + res(me, opponent)
  }, 0)
}
