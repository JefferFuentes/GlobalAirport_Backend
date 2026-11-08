const prisma = require("../config/prisma");

module.exports = (entidad, include) => ({
  listar: () => {
    return prisma[entidad].findMany({ include });
  },

  obtener: (id) => {
    return prisma[entidad].findUnique({
      where: { id: Number(id) },
      include,
    });
  },

  crear: (data) => {
    return prisma[entidad].create({ data, include });
  },

  actualizar: (id, data) => {
    return prisma[entidad].update({
      where: { id: Number(id) },
      data,
      include,
    });
  },

  eliminar: (id) => {
    return prisma[entidad].delete({
      where: { id: Number(id) },
    });
  },
});
