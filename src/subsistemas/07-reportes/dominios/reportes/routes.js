const express = require("express");
const controller = require("./controller");
const verificarJWT = require("../../../../shared/middlewares/verificarJWT");
const autorizar = require("../../../../shared/middlewares/autorizar");
const asyncHandler = require("../../../../shared/utils/asyncHandler");

const router = express.Router();

router.use(verificarJWT, autorizar("ADMIN_GENERAL", "ADMIN_AEROPUERTO"));

router.get("/dashboard", asyncHandler(controller.dashboard));
router.get("/reportes/vuelos", asyncHandler(controller.vuelos));
router.get("/reportes/pasajeros", asyncHandler(controller.pasajeros));
router.get("/reportes/pilotos", asyncHandler(controller.pilotos));
router.get("/reportes/reservaciones", asyncHandler(controller.reservaciones));

module.exports = router;

