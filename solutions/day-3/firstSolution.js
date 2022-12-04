const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const uLetters = upperAlphabet.split('')
const lLetters = upperAlphabet.toLowerCase().split('')

const letterScoreMap = lLetters.reduce((obj, curLowerCase, index) => {
  return {
    ...obj,
    [curLowerCase]: index + 1,
    [uLetters[index]]: index + 27

  }
}, {})

export default (arr) => {
  let score = 0
  for (let i = 0; i < arr.length; i++) {
    const rucksack = arr[i].split('')
    const itemMap = {}
    for (let j = 0; j < rucksack.length; j++) {
      const item = rucksack[j]
      if (j < rucksack.length / 2) {
        itemMap[item] = true
      } else if (itemMap[item]) {
        score += letterScoreMap[item]
        break
      }
    }
  }
  return score
}
