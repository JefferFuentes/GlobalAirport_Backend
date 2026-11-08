exports.normalizar = (body) => {
  const datos = { ...body };

  if (datos.fechaNacimiento) {
    datos.fechaNacimiento = new Date(datos.fechaNacimiento);
  }

  const errores = [];
  const camposObligatorios = [
    "nombreCompleto",
    "tipoDocumento",
    "numeroDocumento",
    "nacionalidad",
    "fechaNacimiento",
    "correo",
  ];

  for (const campo of camposObligatorios) {
    if (datos[campo] === undefined || datos[campo] === "") {
      errores.push(`${campo} obligatorio`);
    }
  }

  return { datos, errores };
};

