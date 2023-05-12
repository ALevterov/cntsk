import services from './services'
const findServicesByString = (string: string) => {
  let result: string[] = []
  services.forEach(service => {
    let { name, keywords } = service
    keywords.forEach(word => {
      word.match()
    })
  })
}
