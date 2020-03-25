import { exclaim } from './funcs'

setTimeout(() => {
  console.log(1)
}, 5000)

exclaim(123)

console.log(exclaim(123))
