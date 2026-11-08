exports.normalizar = (body) => {
  const datos = {
    ...body,
    aeropuertoOrigenId: Number(body.aeropuertoOrigenId),
    aeropuertoDestinoId: Number(body.aeropuertoDestinoId),
    aeronaveId: Number(body.aeronaveId),
    salidaProgramada: new Date(body.salidaProgramada),
    llegadaProgramada: new Date(body.llegadaProgramada),
  };
  const errores = [];

  if (!body.numeroVuelo) {
    errores.push("numeroVuelo obligatorio");
  }

  if (datos.aeropuertoOrigenId === datos.aeropuertoDestinoId) {
    errores.push("Origen y destino diferentes");
  }

  if (!(datos.salidaProgramada < datos.llegadaProgramada)) {
    errores.push("Salida anterior a llegada");
  }

  return { datos, errores };
};

