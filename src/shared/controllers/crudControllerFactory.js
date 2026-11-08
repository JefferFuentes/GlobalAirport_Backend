module.exports = (service, nombreEntidad) => ({
  listar: async (req, res) => {
    return res.json(await service.listar());
  },

  obtener: async (req, res) => {
    const elemento = await service.obtener(req.params.id);

    if (!elemento) {
      return res.status(404).json({
        mensaje: `${nombreEntidad} no encontrado`,
      });
    }

    return res.json(elemento);
  },

  crear: async (req, res) => {
    return res.status(201).json(await service.crear(req.datos));
  },

  actualizar: async (req, res) => {
    return res.json(await service.actualizar(req.params.id, req.body));
  },

  eliminar: async (req, res) => {
    await service.eliminar(req.params.id);
    return res.status(204).send();
  },
});
