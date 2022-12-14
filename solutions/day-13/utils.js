export const comparePair = (left, right) => {
  if (Number.isInteger(left)) {
    if (Number.isInteger(right)) {
      // both integer
      if (left > right) {
        return false
      } else if (left < right) {
        return true
      } else {
        return undefined
      }
    } else {
      // right is not integer
      return comparePair([left], right)
    }
  } else {
    if (Number.isInteger(right)) {
      // left is not integer
      return comparePair(left, [right])
    } else {
      // both not integer
      let r
      while ((left.length && right.length) && r === undefined) {
        const newL = left.shift()
        const newR = right.shift()
        r = comparePair(newL, newR)
      }
      if (r === false) {
        return false
      } else if (r === true) {
        return true
      } else {
        if (left.length && !right.length) {
          return false
        } else if (!left.length && right.length) {
          return true
        } else return undefined
      }
    }
  }
}
export const structPairs = (arr) => {
  const pairs = []
  let curPair = []
  for (let i = 0; i < arr.length; i++) {
    const line = arr[i]
    if (!line) {
      pairs.push(curPair)
      curPair = []
      continue
    }

    curPair.push(eval(line))

    if (i === arr.length - 1) {
      pairs.push(curPair)
    }
  }
  return pairs
}
