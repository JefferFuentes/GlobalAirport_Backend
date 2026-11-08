exports.normalizar = (body) => {
  const datos = { ...body };
  const errores = [];
  const camposObligatorios = ["codigo", "nombre"];

  for (const campo of camposObligatorios) {
    if (datos[campo] === undefined || datos[campo] === "") {
      errores.push(`${campo} obligatorio`);
    }
  }

  return { datos, errores };
};

