const fs = require("fs");

function generateRandomWord(length) {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    let randomWord = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomWord += characters.charAt(randomIndex);
    }
  
    return randomWord;
  }
  
  const numberOfWords = 100;
  const wordLength = 10;
  const randomWords = [];
  
  for (let i = 0; i < numberOfWords; i++) {
    const word = generateRandomWord(wordLength);
    randomWords.push(word);
  }
  
  fs.writeFile("./lib/random-words.txt", randomWords.join("\n"), "utf8", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Random words written to random-words.txt");
    }
  });