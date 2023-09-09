const fs = require("fs");
function copyingFile() {
    fs.copyFile("./lib/readme.txt", "./lib/destination.txt", (err) => {
      if (err) throw err;
      console.log("source was copied sucessfully");
    });
  }
  copyingFile();
  