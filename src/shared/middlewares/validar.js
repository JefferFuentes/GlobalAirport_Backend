module.exports = (normalizar) => (req, res, next) => {
  const resultado = normalizar(req.body || {});

  if (resultado.errores.length) {
    return res.status(400).json({ errores: resultado.errores });
  }

  req.datos = resultado.datos;
  return next();
};
