const  fs = require('fs');
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;


const server =http.createServer((req,res)=>{

    res.setHeader('content-Type','text/html');

    fs.readFile('./lib/index.html',(err,data)=>{
     
        if(err){
            res.writeHead(404);
            res.end("File not found");
        }
        else{
           res.writeHead(200);
           res.end(data);
           console.log("File Read Successfully");
        }
});
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});