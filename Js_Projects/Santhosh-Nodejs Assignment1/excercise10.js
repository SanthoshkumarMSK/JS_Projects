const { info } = require("console");
const fs = require("fs");
const ExcelJS = require("exceljs");

Filename = "user-info.xlsx";

const workbook = new ExcelJS.Workbook();

workbook.xlsx
  .readFile(Filename)

  .then(() => {
    const worksheet = workbook.getWorksheet(1);

    const jsonData = [];

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber == 1) return;

      const [Name, Age, Gender, City] = row.values;
      console.log("aaa ",row.values);
      const UserData = {
        Name:row.values[1],
        Age:row.values[2],
        Gender:row.values[3],
        City:row.values[4]
      };
      jsonData.push(UserData);
    });

    const jsonContent = JSON.stringify(jsonData, null, 4);

    console.log(jsonContent);
  })
  .catch((err) => {
    console.error("Error in File reading", err);
  });
