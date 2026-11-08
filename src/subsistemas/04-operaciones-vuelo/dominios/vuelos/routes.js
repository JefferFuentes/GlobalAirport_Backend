const express = require("express");
const controller = require("./controller");
const model = require("./model");
const verificarJWT = require("../../../../shared/middlewares/verificarJWT");
const autorizar = require("../../../../shared/middlewares/autorizar");
const validar = require("../../../../shared/middlewares/validar");
const asyncHandler = require("../../../../shared/utils/asyncHandler");

const router = express.Router();

router.use(verificarJWT);

router.get("/", asyncHandler(controller.listar));
router.get("/:id", asyncHandler(controller.obtener));

router.post(
  "/",
  autorizar("ADMIN_GENERAL", "ADMIN_AEROPUERTO"),
  validar(model.normalizar),
  asyncHandler(controller.crear)
);

router.patch(
  "/:id",
  autorizar("ADMIN_GENERAL", "ADMIN_AEROPUERTO", "PILOTO"),
  asyncHandler(controller.actualizar)
);

module.exports = router;

