const path = require('path')

const paths = {
    pathCSV: path.resolve(__dirname, '..', 'distribuicao_respiradores.csv'),
    pathHTML: path.resolve(__dirname, '..' ,'template.html'),
    pathPDF: path.resolve(__dirname, '..', 'template.pdf')
}

module.exports = paths;