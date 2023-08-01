const fs = require('fs') // Importing a module that is 'fs' for file handling
const filePath = './data.txt' // given the path of the txt file

fs.readFile(filePath, 'utf-8', (err, data) => {
  // use the .readfile method  and call back function i.e(as soons as that particular thing happens call that function)to read the data it takes  three arg.The'utf-8' so that it gives the data in  string
  if (err) {
    console.log('Error', err)
  } else {
    console.log('file content', data)
  }
})
