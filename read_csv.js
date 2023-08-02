const fs = require('fs') // library to deal with files
const pars = require('csv-parser') //library to deal with csv
const arr = [] //made an array to add the data
const filePath = './industry.csv'

fs.ReadStream(filePath) // creates a stream(smaller bytes data)
  .pipe(pars()) // connect the output from strem and input from pars() which knows how to read and understand csv file
  .on('data', (data) => {
    // it's an event listener
    arr.push(data)
  })
  .on('end', () => {
    // event listner to tell what to do if csv file ends
    console.log(arr)
  })
  .on('error', (error) => {
    // if some error happens then list down those errors
    console.log('some erroe found', error)
  })
