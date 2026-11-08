const repository = require("./repository");
const bcrypt = require("bcryptjs");

exports.listar = repository.listar;
exports.obtener = repository.obtener;

exports.crear = async (datos) => {
  return repository.crear({
    nombreCompleto: datos.nombreCompleto,
    correo: datos.correo,
    passwordHash: await bcrypt.hash(datos.password, 10),
    telefono: datos.telefono,
    rolId: datos.rolId,
  });
};

exports.actualizar = async (id, datos) => {
  if (datos.password) {
    datos.passwordHash = await bcrypt.hash(datos.password, 10);
    delete datos.password;
  }

  return repository.actualizar(id, datos);
};

exports.desactivar = (id) => {
  return repository.actualizar(id, {
    estado: "INACTIVO",
    desactivadoEn: new Date(),
  });
};

