const prisma = require("../../../../shared/config/prisma");

exports.porCorreo = (correo) => {
  return prisma.usuario.findUnique({
    where: { correo },
    include: { rol: true },
  });
};

