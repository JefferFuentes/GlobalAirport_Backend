const crudServiceFactory = require("../../../../shared/services/crudServiceFactory");
const repository = require("./repository");

module.exports = crudServiceFactory(repository);

