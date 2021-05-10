//Cross~~
//chamando dependencia express (para instalar: npm install express)
const express = require("express");
//chamando cors (instalar> npm install cors)
const cors = require("cors");
//chamando arquivo router
const router = require("./router");
//definindo formato de app
const app = express();
//definindo formato de comunicação servidor/local (no caso HEROKU não recebe o método de comunicação ele que escolhe selecionando a PORT automaticamente por padrao)
const port = process.env.PORT || 3000;
//chamada de dependencias
app.use(cors());
app.use(express.json());
app.use(router);
//formatação do metodo de requisição caso a comunicação seja OK a mensagem "OK" será exibida
app.get("/", (req, res) => {
  res.json({ status: "OK" });
});
//metodo usado para conectar
app.listen(port, () => {
  console.log(`Server listen in port ${port}`);
});