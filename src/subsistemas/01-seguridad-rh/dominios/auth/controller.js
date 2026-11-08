const service = require("./service");

exports.login = async (req, res) => {
  return res.json(await service.login(req.body));
};

exports.me = async (req, res) => {
  return res.json(req.usuario);
};

