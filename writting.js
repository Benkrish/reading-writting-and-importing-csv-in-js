const fs = require('fs')
const filePath = './output.txt'
const content = 'Hello this is my first written file done by js'

fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    console.log('Error', err)
  } else {
    console.log('succesully done')
  }
})
