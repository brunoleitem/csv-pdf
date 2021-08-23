const fs = require('fs');
const puppeteer = require('puppeteer')

const path = require('path')
const pathHTML = path.resolve(__dirname, 'template.html')
const pathPDF = path.resolve(__dirname, './', 'template.pdf')

const printPDF = async () => {
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();



  await page.goto(`file://${__dirname}/template.html`, { waitUntil: 'networkidle0' });


  const pdf = await page.pdf({
    printBackground: true,
    format: 'A4',
    landscape: true,
    margin: {
     top: '20px', right: '20px', bottom: '20px', left: '20px'}
  });
  await browser.close();
  return pdf;
}


const init = async () => {
  try {
    const pdf = await printPDF();
    fs.writeFileSync(pathPDF, pdf);
  } catch (err) {
    console.log(err)
  }
}

init();