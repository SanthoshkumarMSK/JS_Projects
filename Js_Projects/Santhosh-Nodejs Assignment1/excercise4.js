const fs = require("fs");
fs.rename("./lib/sample.txt", "./lib/NewSample.txt", (err) => {
    if (err) throw err;
    console.log("Renamed sucessfully");
  });
  
  