const fs = require("fs");

const http = require("http");

const hostname = "127.0.0.1";

const port = 8080;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  fs.readFile("./lib/user.txt", (err, data) => {
    if (err) {
      res.writeHead(404);

      res.end("File Not Found");

      return;
    }

    const lines = data.toString().split("\n");

    const headerFields = lines[0].split("|");

    let htmlContent = `

            <html>

            <head>

            <title>Converted Txt to Html</title>

            </head>

            <body>

            <table border="1">

            <thead>

            <tr>`;

    headerFields.forEach((field) => {
      htmlContent += `<th>${field}</th>`;
    });

    htmlContent += `</tr></thead><tbody>`;

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split("|");

      if (values.length === headerFields.length) {
        htmlContent += `<tr>`;

        values.forEach((value) => {
          htmlContent += `<td>${value}</td>`;
        });

        htmlContent += `</tr>`;
      }
    }

    htmlContent += `</tbody></table></body></html>`;

    fs.writeFile("./lib/output.html", htmlContent, (err) => {
      if (err) {
        console.error("Error", err);

        res.writeHead(500); 

        res.end("Internal Server Error");
      } else {
        res.writeHead(200);

        res.end(htmlContent);

        console.log("File Converted");
      }
    });
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
