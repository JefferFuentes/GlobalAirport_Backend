const prisma = require("../../../../shared/config/prisma");

exports.dashboard = async () => {
  const [
    aeropuertos,
    vuelos,
    pasajeros,
    reservaciones,
    pilotosActivos,
  ] = await Promise.all([
    prisma.aeropuerto.count(),
    prisma.vuelo.count(),
    prisma.pasajero.count(),
    prisma.reservacion.count(),
    prisma.piloto.count({ where: { estado: "ACTIVO" } }),
  ]);

  return {
    aeropuertos,
    vuelos,
    pasajeros,
    reservaciones,
    pilotosActivos,
  };
};

exports.vuelos = async () => ({
  total: await prisma.vuelo.count(),
  porEstado: await prisma.vuelo.groupBy({
    by: ["estado"],
    _count: { _all: true },
  }),
});

exports.pasajeros = async () => ({
  total: await prisma.pasajero.count(),
  activos: await prisma.pasajero.count({
    where: { estado: "ACTIVO" },
  }),
});

exports.pilotos = async () => ({
  total: await prisma.piloto.count(),
  porEstado: await prisma.piloto.groupBy({
    by: ["estado"],
    _count: { _all: true },
  }),
});

exports.reservaciones = async () => ({
  total: await prisma.reservacion.count(),
  monto: await prisma.reservacion.aggregate({
    _sum: { monto: true },
  }),
});

