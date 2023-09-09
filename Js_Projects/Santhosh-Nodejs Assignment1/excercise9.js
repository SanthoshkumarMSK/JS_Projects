const fs = require('fs');

var contents = [{  "Name": "Santhosh",
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

const ModifiedData = contents.map(content=>`${content.Name}|${content.age}|${content.Gender}|${content.city}`).join('\n');


fs.writeFile('./lib/user-info.txt',ModifiedData,function (err){

    if(err){
        console.error(err)
        return;
    }

console.log("User Details have been successfully Written");

});