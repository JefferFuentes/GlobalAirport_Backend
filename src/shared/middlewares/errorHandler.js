module.exports = (error, req, res, next) => {
  console.error(error);

  const statusPorCodigo = {
    P2002: 409,
    P2025: 404,
  };

  const status = error.status || statusPorCodigo[error.code] || 500;

  res.status(status).json({
    mensaje: error.message || "Error interno",
  });
};
