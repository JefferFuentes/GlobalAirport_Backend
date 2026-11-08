const repository = require("./repository");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async ({ correo, password }) => {
  const usuario = await repository.porCorreo(
    String(correo || "").toLowerCase()
  );
  const passwordValida =
    usuario &&
    await bcrypt.compare(String(password || ""), usuario.passwordHash);

  if (!usuario || usuario.estado !== "ACTIVO" || !passwordValida) {
    const error = new Error("Credenciales incorrectas");
    error.status = 401;
    throw error;
  }

  const payload = {
    id: usuario.id,
    correo: usuario.correo,
    rol: usuario.rol.codigo,
  };

  return {
    token: jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" }),
    usuario: {
      id: usuario.id,
      nombreCompleto: usuario.nombreCompleto,
      correo: usuario.correo,
      rol: usuario.rol.codigo,
    },
  };
};

