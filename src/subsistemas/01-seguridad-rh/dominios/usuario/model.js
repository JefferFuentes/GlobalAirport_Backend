exports.normalizar = (body) => {
  const datos = {
    nombreCompleto: String(body.nombreCompleto || "").trim(),
    correo: String(body.correo || "").trim().toLowerCase(),
    password: String(body.password || ""),
    telefono: body.telefono || null,
    rolId: Number(body.rolId),
  };
  const errores = [];

  if (!datos.nombreCompleto) {
    errores.push("nombreCompleto obligatorio");
  }

  if (!datos.correo) {
    errores.push("correo obligatorio");
  }

  if (datos.password.length < 8) {
    errores.push("password mÃ­nimo 8 caracteres");
  }

  if (!Number.isInteger(datos.rolId)) {
    errores.push("rolId obligatorio");
  }

  return { datos, errores };
};

