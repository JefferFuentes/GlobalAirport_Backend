const prisma = require("../../../../shared/config/prisma");

exports.reservacion = (id) => {
  return prisma.reservacion.findUnique({
    where: { id: Number(id) },
  });
};

exports.crear = (data) => {
  return prisma.checkIn.create({ data });
};

exports.marcar = (id) => {
  return prisma.reservacion.update({
    where: { id: Number(id) },
    data: { estado: "CHECK_IN" },
  });
};

