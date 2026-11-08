exports.normalizar = (body) => {
  const datos = { ...body };

  if (datos.usuarioId !== undefined) {
    datos.usuarioId = Number(datos.usuarioId);
  }

  if (datos.aeropuertoId !== undefined) {
    datos.aeropuertoId = Number(datos.aeropuertoId);
  }

  if (datos.fechaNacimiento) {
    datos.fechaNacimiento = new Date(datos.fechaNacimiento);
  }

  const errores = [];
  const camposObligatorios = [
    "usuarioId",
    "aeropuertoId",
    "numeroLicencia",
    "nacionalidad",
    "fechaNacimiento",
  ];

  for (const campo of camposObligatorios) {
    if (datos[campo] === undefined || datos[campo] === "") {
      errores.push(`${campo} obligatorio`);
    }
  }

  return { datos, errores };
};

