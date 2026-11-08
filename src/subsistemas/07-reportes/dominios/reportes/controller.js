const service = require("./service");

const reportes = ["dashboard", "vuelos", "pasajeros", "pilotos", "reservaciones"];

for (const reporte of reportes) {
  exports[reporte] = async (req, res) => {
    return res.json(await service[reporte]());
  };
}

