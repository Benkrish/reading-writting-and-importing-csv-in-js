const fs = require('fs')
const filePath = './newdata.txt'
const newPath = './newoutput'

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log('error found i.e ', err)
  } else {
    const modification = data.replace(/and/g, '&')
    fs.writeFile(newPath, modification, 'utf-8', (err) => {
      if (err) {
        console.log('error found', err)
      } else {
        console.log('sucessfully done')
      }
    })
  }
})
