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
  let itemMap = {}
  for (let i = 0; i < arr.length; i++) {
    const rucksack = arr[i].split('')
    const rucksackMap = {}
    for (let j = 0; j < rucksack.length; j++) {
      const item = rucksack[j]
      if (!rucksackMap[item]) {
        rucksackMap[item] = true
        itemMap[item] = (itemMap[item] ?? 0) + 1
      }
      if (i % 3 === 2 && itemMap[item] === 3) {
        score += letterScoreMap[item]
        itemMap = {}
        break
      }
    }
  }
  return score
}
