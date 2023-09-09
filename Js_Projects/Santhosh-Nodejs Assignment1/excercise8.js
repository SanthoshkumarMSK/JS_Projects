
const fs = require('fs');
const { parse } = require('path');

const FILE_NAME = './lib/stringToJson.txt';


fs.readFile(FILE_NAME,"utf-8",function (err,data){

     if(err){
         console.error("Error Reading the file");
         return;
     }
     
     const lines = data.split('\n');
     const jsonObj ={};

     lines.forEach ((line)=>{
     const [key,value] = line.split(':');
     if (key && value){
         jsonObj[key.trim()] = value.trim();
        }
    });
console.log(JSON.stringify(jsonObj,null,2));

});