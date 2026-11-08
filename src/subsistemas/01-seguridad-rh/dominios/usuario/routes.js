const express = require("express");
const controller = require("./controller");
const model = require("./model");
const verificarJWT = require("../../../../shared/middlewares/verificarJWT");
const autorizar = require("../../../../shared/middlewares/autorizar");
const validar = require("../../../../shared/middlewares/validar");
const asyncHandler = require("../../../../shared/utils/asyncHandler");

const router = express.Router();

router.use(verificarJWT, autorizar("ADMIN_GENERAL"));

router.get("/", asyncHandler(controller.listar));
router.get("/:id", asyncHandler(controller.obtener));
router.post("/", validar(model.normalizar), asyncHandler(controller.crear));
router.patch("/:id", asyncHandler(controller.actualizar));
router.patch("/:id/desactivar", asyncHandler(controller.desactivar));

module.exports = router;

