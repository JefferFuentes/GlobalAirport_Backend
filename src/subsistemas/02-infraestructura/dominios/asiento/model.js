exports.normalizar = (body) => {
  const datos = { ...body };

  if (datos.aeronaveId !== undefined) {
    datos.aeronaveId = Number(datos.aeronaveId);
  }

  const errores = [];
  const camposObligatorios = ["aeronaveId", "numero"];

  for (const campo of camposObligatorios) {
    if (datos[campo] === undefined || datos[campo] === "") {
      errores.push(`${campo} obligatorio`);
    }
  }

  return { datos, errores };
};

