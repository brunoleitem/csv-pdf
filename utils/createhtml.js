const fs = require('fs')
const data = require('../data.json')
const path = require('path')

/* 
  {
    "DATA": "05/06/2020",
    "FORNECEDOR": "LEISTUNG",
    "DESTINO": "ACRE",
    "ESTADO/MUNICIPIO": "ESTADO",
    "TIPO": "UTI",
    "QUANTIDADE": "30",
    "VALOR": "R$ 1.800.000,00",
    "DESTINATARIO": "Secretaria Estadual de Saúde",
    "UF": "AC",
    "DATA DE ENTREGA": "08/06/2020"
  },
  */

const pathHTML = path.resolve(__dirname, 'template.html')

const createRow = (item) => `
  <tr>
    <td>${item.DATA}</td>
    <td>${item.FORNECEDOR}</td>
    <td>${item.DESTINO}</td>
    <td>${item["ESTADO/MUNICIPIO"]}</td>
    <td>${item.TIPO}</td>
    <td>${item.QUANTIDADE}</td>
    <td>${item.VALOR}</td>
    <td>${item.DESTINATARIO}</td>
    <td>${item.UF}</td>
    <td>${item["DATA DE ENTREGA"]}</td>
  </tr>
`;

const createTable = (rows) => `
  <table>
    <tr>
        <th>DATA</th>
        <th>FORNECEDOR</th>
        <th>DESTINO</th>
        <th>ESTADO/MUNICIPIO</th>
        <th>TIPO</th>
        <th>QUANTIDADE</th>
        <th>VALOR</th>
        <th>DESTINATARIO</th>
        <th>UF</th>
        <th>DATA DE ENTREGA</th>
    </tr>
    ${rows}
  </table>
`;

const createHtml = (table) => `
  <html>
    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        body {
          font-family: 'Roboto', sans-serif;
        }



          .title {

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 50px;
          }

          tr {
            text-align: center;
            border: 1px solid black;
          }
          th, td {
            padding: 15px;
          }

          tr:nth-child(odd) {
            background: #CACACA
          }
          tr:nth-child(even) {
            background: #FFF
          }
          .no-content {
            background-color: red;
          }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="title">
          <h1>Distribuição de Respiradores</h1>
          <span>Informações sobre respiradores distribuídos pelo Ministério da Saúde a estados e municípios.</span>
        </div>
        ${table}
      </div>
    </body>
  </html>
`;

const fileExists = (filePath) => {
	try {
		fs.statSync(filePath);
		return true
	} catch (error) {
		return false
	}
}

try {

	if (fileExists(pathHTML)) {

		fs.unlinkSync(pathHTML);
	}

	const rows = data.map(createRow).join('');

	const table = createTable(rows);

	const html = createHtml(table);

	fs.writeFileSync(pathHTML, html);

} catch (error) {
	console.log(error);
}