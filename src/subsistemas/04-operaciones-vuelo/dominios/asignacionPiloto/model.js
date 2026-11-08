exports.normalizar = (body) => {
  const datos = { ...body };

  if (datos.vueloId !== undefined) {
    datos.vueloId = Number(datos.vueloId);
  }

  if (datos.pilotoId !== undefined) {
    datos.pilotoId = Number(datos.pilotoId);
  }

  const errores = [];
  const camposObligatorios = ["vueloId", "pilotoId"];

  for (const campo of camposObligatorios) {
    if (datos[campo] === undefined || datos[campo] === "") {
      errores.push(`${campo} obligatorio`);
    }
  }

  return { datos, errores };
};

