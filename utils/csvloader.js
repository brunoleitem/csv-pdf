const csv = require('csvtojson')
const fs = require('fs')
class csvLoader {

  generate(filename) {
    csv({delimiter: ';'})
    .fromFile(filename)
    .then((json)=> {
    
      fs.writeFileSync('data.json', JSON.stringify(json), 'utf8', (err)=> {
        if(err) console.log(err)
      })
    })
  }



}

module.exports = csvLoader 