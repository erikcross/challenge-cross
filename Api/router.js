//cross~~
const express = require("express");
const router = express.Router();
const listRepos = require("./controllers/listRepos");
//esse router...
router.get("/repo/:username", (req, res) => listRepos(req, res));
module.exports = router;
//...define o metodo get usando o primeiro GET apos a url da api (servidor da API), e o username do git assim enviando as informações para coleta.