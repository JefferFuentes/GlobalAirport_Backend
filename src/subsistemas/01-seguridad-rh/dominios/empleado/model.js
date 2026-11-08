exports.normalizar = (body) => {
  const datos = { ...body };

  if (datos.usuarioId !== undefined) {
    datos.usuarioId = Number(datos.usuarioId);
  }

  if (datos.aeropuertoId !== undefined) {
    datos.aeropuertoId = Number(datos.aeropuertoId);
  }

  const errores = [];
  const camposObligatorios = [
    "usuarioId",
    "aeropuertoId",
    "numeroEmpleado",
    "puesto",
  ];

  for (const campo of camposObligatorios) {
    if (datos[campo] === undefined || datos[campo] === "") {
      errores.push(`${campo} obligatorio`);
    }
  }

  return { datos, errores };
};

