
const fs = require("fs");

function searchInFile(fileName, wordToSearch) {

    const fileContent = fs.readFileSync(fileName, "utf8").split("\n");
    let lineNumber = -1;
  
    for (let i = 0; i < fileContent.length; i++) {
      if (fileContent[i].includes(wordToSearch)) {
        lineNumber = i + 1; 
        break;
      }
    }
    return lineNumber;
  }
  
  const fileName = "./lib/excerciseSample.txt"; 
  const wordToSearchFor = "powerful company"; 
  const lineNumber = searchInFile(fileName, wordToSearchFor);
  
  if (lineNumber !== -1) {
    console.log(`The word '${wordToSearchFor}' was found on line ${lineNumber}.`);
  } else {
    console.log(`The word '${wordToSearchFor}' was not found in the file.`);
  }
  
  
  