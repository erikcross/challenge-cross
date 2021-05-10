//cross.. :)
//importação do axios para coleta de dados via URL
const axios = require("axios");
//URL que sera utilizada
const URL_BASE = "https://api.github.com/orgs";
//exportação de dados e formatação em método TryCatch
module.exports = async (req, res) => {
  try {
    const { username } = req.params;
    const language = req.query.language || "C#";
    const limit = +req.query.limit || 5;
    const { data } = await axios.get(`${URL_BASE}/${username}/repos`);
//retornando o status de comunicação se conexão OK
    return res.status(200).json(
      data
        .filter((item) => item.language === language)
        .sort(compareDate)
        .map((item) => {
          return {
            name: item.full_name,
            description: item.description,
            avatar: item.owner.avatar_url,
          };//feita a formatação redirecionando somente os elementos nome URL do avatar e nome 2 (repo/desc)
        })
        .slice(0, limit)
    );
    //retorna catch caso status de conexão seja offline ou o método get tenha sido digitado incorretamente
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Servidor com problema, entrar em contato: josoeribeiropadilha@gmail.com" });
  }
};
//retorna os metodos coletados em formato organizacional requisitado por data. regra define a ordem de exibição.
function compareDate(a, b) {
  return a.created_at < b.created_at;
}