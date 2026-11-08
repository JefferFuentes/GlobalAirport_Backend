const express = require("express");
const controller = require("./controller");
const verificarJWT = require("../../../../shared/middlewares/verificarJWT");
const autorizar = require("../../../../shared/middlewares/autorizar");
const asyncHandler = require("../../../../shared/utils/asyncHandler");

const router = express.Router();

router.post(
  "/",
  verificarJWT,
  autorizar("ADMIN_GENERAL", "ADMIN_AEROPUERTO", "EMPLEADO"),
  asyncHandler(controller.crear)
);

module.exports = router;

