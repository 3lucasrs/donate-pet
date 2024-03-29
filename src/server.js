const express = require("express");
const mustache = require("mustache-express");
const mainRoutes = require("./routes/index");
const path = require("path");
const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

server.use(mainRoutes);
server.use((req, res) => {
  res.send("Pagina não encontrada!");
});

server.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
