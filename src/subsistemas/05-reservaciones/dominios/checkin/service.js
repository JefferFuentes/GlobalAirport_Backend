const repository = require("./repository");
const { codigo } = require("../../../../shared/utils/codigos");

exports.crear = async (datos) => {
  const reservacion = await repository.reservacion(datos.reservacionId);

  if (!reservacion || reservacion.estado !== "CONFIRMADA") {
    const error = new Error("ReservaciÃ³n no disponible");
    error.status = 400;
    throw error;
  }

  const checkIn = await repository.crear({
    ...datos,
    codigoAbordaje: codigo("BOARD"),
  });

  await repository.marcar(reservacion.id);
  return checkIn;
};

