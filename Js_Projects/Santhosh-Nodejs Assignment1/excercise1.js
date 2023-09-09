const fs = require("fs");
const { sample } = require("lodash");

function addContentToFile(fileName, content) {
  fs.appendFile(fileName, content, (err) => {
    if (err) {
      console.error(`Error appending content to ${fileName}:`, err);
    } else {
      console.log(`Content added to ${fileName}`);
    }
  });
}

addContentToFile("./lib/readme.txt", `"About Node.js
As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. 
In the following "hello world" example, many connections can be handled concurrently. Upon each connection, 
the callback is fired, but if there is no work to be done, Node.js will sleep.This is the README file content..\n"`);

addContentToFile(".lib/students.csv", "santhosh,Kumar,25\n Vijay,Kumar,26\n");

addContentToFile(
  "./lib/index.html",
  "<html><body><h1>Hello, World!</h1></body></html>\n"
);

function getFileContent(fileName) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${fileName}:`, err);
    } else {
      console.log(`Contents of ${fileName}:`);

      console.log(data);
    }
  });
}
getFileContent("./lib/readme.txt");
getFileContent("./lib/students.csv");
getFileContent("./lib/index.html");
