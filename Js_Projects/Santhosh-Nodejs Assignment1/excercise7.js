const fs = require("fs");


const dateObject = new Date();

const date = (`0 ${dateObject.getDate()}`).slice(-2);
const month = (`0 ${dateObject.getMonth() + 1}`).slice(-2);
const year = dateObject.getFullYear();
const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
const seconds = dateObject.getSeconds();

fs.readFile("./lib/readme.txt","utf8", function(err,data){
    if (err){
        console.error("Error in Reading file");
     return;
    }

    let currentDate = (`${date}-${month}-${year} ${hours}:${minutes}:${seconds}`);
    
    const lines = data.split("\n");

    const contentWithDate= lines.map((line)=> `${currentDate}-${line}`).join('\n\n');
    
    console.log(contentWithDate);

});