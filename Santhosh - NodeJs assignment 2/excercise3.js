let http = require("http");
let fs = require("fs");
let port = 8080;

let request = require("url");
const express = require("express");


let server = http.createServer((request, response) => {
  if (request.url == "/") {

    fs.readFile("./lib/index1.html",(err, data) => {
      if (err) {
        response.writeHead(404);
        response.end("This file doesn't exist");
      }
       else {
        response.writeHead(200);
        response.end(data);
        }
       });
     } 

   else if (request.url == "/home") {

    fs.readFile("./lib/home.html",(err, data) => {
      if (err) {
        response.writeHead(404);
        response.end("This file doesn't exist");
      }
       else {
        response.writeHead(200);
        response.end(data);
        }
       });
     } 
  else if (request.url == "/about") {
    fs.readFile("./lib/about.html", (err, data) => {
      if (err) {
        response.writeHead(404);
        response.end("This file doesn't exist");
      } else {
        response.writeHead(200);
        response.end(data);
    } 
    });
  }
  else if (request.url == "/contact") {
    fs.readFile("./lib/contact.html", (err, data) => {
      if (err) {
        response.writeHead(404);
        response.end("This file doesn't exist");
      } else {
        response.writeHead(200);
        response.end(data);
    } 
    });
  }
});

console.log("Server started");
server.listen(port);