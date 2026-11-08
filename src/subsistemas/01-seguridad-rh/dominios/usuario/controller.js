const service = require("./service");

exports.listar = async (req, res) => {
  return res.json(await service.listar());
};

exports.obtener = async (req, res) => {
  const usuario = await service.obtener(req.params.id);

  if (!usuario) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }

  return res.json(usuario);
};

exports.crear = async (req, res) => {
  return res.status(201).json(await service.crear(req.datos));
};

exports.actualizar = async (req, res) => {
  return res.json(await service.actualizar(req.params.id, req.body));
};

exports.desactivar = async (req, res) => {
  return res.json(await service.desactivar(req.params.id));
};

