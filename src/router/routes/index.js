const files = require.context('.', true, /\.js$/)

let configArray = []

files.keys().forEach(key => {
  if (key === './index.js') return
  configArray = configArray.concat(files(key).default || files(key))
})

export default configArray
