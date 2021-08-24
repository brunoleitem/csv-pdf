const csv = require('csvtojson')
const fs = require('fs')
const { pathCSV } = require('./paths')


const generate = (filename) => {
    csv({delimiter: ';'})
    .fromFile(filename)
    .then((json)=> {
      fs.writeFileSync('data.json', JSON.stringify(json), 'utf8', (err)=> {
        if(err) console.log(err)
      })
    })
  }


generate(pathCSV);




