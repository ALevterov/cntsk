import services from './services'
const findServicesByString = (string: string) => {
  let result: string[] = []
  let words: string[] = []
  out: {
    for (let service of services) {
      let { name, keywords } = service
      for (let word of keywords) {
        let regExp = new RegExp(word, 'ig')
        if (string.match(regExp)) {
          result.push(name)
          words.push(word)
          break
        }
      }
    }
  }
  if (result.length === 0) {
    result.push('индивидуальные условия')
  }
  return { result, words }
}

export default findServicesByString
