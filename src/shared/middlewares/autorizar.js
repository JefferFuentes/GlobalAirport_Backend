module.exports =
  (...roles) =>
  (req, res, next) => {
    if (roles.includes(req.usuario?.rol)) {
      return next();
    }

    return res.status(403).json({ mensaje: "No autorizado" });
  };
