const fsc = require('fs');
const path = require('path');
const { jsPDF } = require("jspdf");
var x1 = require('excel4node');

fsc.writeFile(path.join(__dirname,'archivoc.txt'),"archivo creado api callback",(err)=>{
    if(err){
        console.log(err)
    } else {
        console.log("Archivo creado con el api fs callback")
    }
});

const doc = new jsPDF();
doc.text("Hello world!",10,10);
doc.save(path.join(__dirname,"a4.pdf"));

var wb = new x1.Workbook();

var ws = wb.addWorksheet('Sheet 1');
var ws2 = wb.addWorksheet('Sheet 2');

var style = wb.createStyle({
    font: {
        color: '#FF0800',
        size: 12,
    },
    numberFormat: '$#,$$0.00; ($#,##0.00); -',
});

ws.cell(1,1)
    .number(100)
    .style(style);

ws.cell(1, 2)
    .number(200)
    .style(style);

ws.cell(1, 3)
    .formula('A1 + B1')
    .style(style);

    wb.write(path.join(__dirname,'Excel.xlsx'));