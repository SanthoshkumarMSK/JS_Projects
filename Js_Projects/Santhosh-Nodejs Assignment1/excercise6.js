const fs = require("fs");

const fileName = "./lib/excerciseSample.txt"; 

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  const lines = data.split("\n");
 var contentWithLineBreaks= lines.join('\n\n');
 console.log(contentWithLineBreaks);
 
 fs.writeFile(fileName,contentWithLineBreaks,(err,data)=>{
                
    if(err){

        console.error("Error in writing",err);
        return;
    }
    else{
        console.log(data);
        console.log("Written Successfully");
    }
     
  })
  });
