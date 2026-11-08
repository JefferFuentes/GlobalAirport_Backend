const express = require("express");
const controller = require("./controller");
const verificarJWT = require("../../../../shared/middlewares/verificarJWT");
const asyncHandler = require("../../../../shared/utils/asyncHandler");

const router = express.Router();

router.post("/login", asyncHandler(controller.login));
router.get("/me", verificarJWT, asyncHandler(controller.me));

module.exports = router;

