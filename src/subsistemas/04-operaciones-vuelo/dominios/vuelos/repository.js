const crudRepositoryFactory = require("../../../../shared/repositories/crudRepositoryFactory");

const include = {
  aeropuertoOrigen: true,
  aeropuertoDestino: true,
  aeronave: true,
  pilotos: {
    include: { piloto: true },
  },
};

module.exports = crudRepositoryFactory("vuelo", include);

