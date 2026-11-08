const crudControllerFactory = require("../../../../shared/controllers/crudControllerFactory");
const service = require("./service");

module.exports = crudControllerFactory(service, "aeronave");

