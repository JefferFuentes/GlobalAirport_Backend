exports.codigo = (prefijo) => {
  const numeroAleatorio = Math.floor(Math.random() * 10000);

  return `${prefijo}-${Date.now()}-${numeroAleatorio}`;
};
