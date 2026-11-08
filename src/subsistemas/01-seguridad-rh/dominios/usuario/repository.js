const prisma = require("../../../../shared/config/prisma");

const select = {
  id: true,
  nombreCompleto: true,
  correo: true,
  telefono: true,
  estado: true,
  rol: true,
  creadoEn: true,
  actualizadoEn: true,
};

exports.listar = () => {
  return prisma.usuario.findMany({ select });
};

exports.obtener = (id) => {
  return prisma.usuario.findUnique({
    where: { id: Number(id) },
    select,
  });
};

exports.crear = (data) => {
  return prisma.usuario.create({ data, select });
};

exports.actualizar = (id, data) => {
  return prisma.usuario.update({
    where: { id: Number(id) },
    data,
    select,
  });
};

