import fs from 'fs'
import path from 'path'
import callsite from 'callsite'

export const readFile = (inputFileName) => {
  const stack = callsite()
  const requester = stack[1].getFileName()
  const finalPath = path.join(path.dirname(requester), inputFileName).substring(5)
  return fs.readFileSync(finalPath, 'utf8').split('\n')
}
