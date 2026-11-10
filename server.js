const http = require("http");
const fs = require("fs");
const path = require("path");

const arquivo = path.join(__dirname, "public", "index.html");

const server = http.createServer((req, res) => {
  fs.readFile(arquivo, (erro, conteudo) => {
    if (erro) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Erro ao carregar o sistema.");
    }

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(conteudo);
  });
});

server.listen(3000, () => {
  console.log("Sistema disponível em http://localhost:3000");
});
