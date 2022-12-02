
const fMap = {
  A: 'r',
  B: 'p',
  C: 's'
}

const scoreMap = {
  r: 1,
  p: 2,
  s: 3
}

const outcomeScoreMap = {
  X: 0,
  Y: 3,
  Z: 6
}

const getMoveScore = (opponent, outcome) => {
  if (outcome === 'Y') { return scoreMap[opponent] } else if (outcome === 'Z') {
    if (opponent === 'r') { return scoreMap.p } else if (opponent === 'p') { return scoreMap.s } else return scoreMap.r
  } else {
    if (opponent === 'r') { return scoreMap.s } else if (opponent === 'p') { return scoreMap.r } else return scoreMap.p
  }
}

export default (arr) => {
  return arr.reduce((curScore, round) => {
    const [f, outcome] = round.split(' ')
    const opponent = fMap[f]
    return curScore + getMoveScore(opponent, outcome) + outcomeScoreMap[outcome]
  }, 0)
}
