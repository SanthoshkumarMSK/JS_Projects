const fs = require('fs')

const ExcelJS= require('exceljs');

var contents = [{ 
"Name": "Santhosh",
"age": "24",
"Gender": "Male",
"city": "Virudhunagar"},
{
    "Name": "Vijay",
    "age": "25",
    "Gender": "Male",
    "city": "Dindugal"
  }
]

const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('User-info');

const Title = ['Name','Age','Gender','City'];

worksheet.addRow(Title);
contents.forEach(content=>{

    const {Name,age,Gender,city}=content;
    worksheet.addRow([Name,age,Gender,city]);

});
workbook.xlsx.writeFile('user-info.xlsx')
.then(()=>{
console.log('User details written successfully');

})
.catch(err=>{
    console.error('Error writing',err);
});