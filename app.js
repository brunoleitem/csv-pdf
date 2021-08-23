const csv = require('csvtojson')
const fs = require('fs')
const csvfilepath = './distribuicao_respiradores.csv'
const csvLoader = require('./utils/csvloader')


const csvloader = new csvLoader;


csvloader.generate(csvfilepath);

