const service = require("./service");

exports.crear = async (req, res) => {
  const datos = {
    reservacionId: Number(req.body.reservacionId),
    empleadoId: req.body.empleadoId ? Number(req.body.empleadoId) : null,
  };

  return res.status(201).json(await service.crear(datos));
};

