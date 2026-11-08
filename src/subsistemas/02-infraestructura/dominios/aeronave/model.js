exports.normalizar = (body) => {
  const datos = { ...body };

  if (datos.aeropuertoId !== undefined) {
    datos.aeropuertoId = Number(datos.aeropuertoId);
  }

  if (datos.capacidad !== undefined) {
    datos.capacidad = Number(datos.capacidad);
  }

  const errores = [];
  const camposObligatorios = [
    "aeropuertoId",
    "matricula",
    "modelo",
    "fabricante",
    "capacidad",
  ];

  for (const campo of camposObligatorios) {
    if (datos[campo] === undefined || datos[campo] === "") {
      errores.push(`${campo} obligatorio`);
    }
  }

  return { datos, errores };
};

