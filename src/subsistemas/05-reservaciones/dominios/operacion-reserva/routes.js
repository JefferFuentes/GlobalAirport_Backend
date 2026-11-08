const r=require("express").Router(),c=require("./controller"),jwt=require("../../../../shared/middlewares/verificarJWT"),ah=require("../../../../shared/utils/asyncHandler");r.get("/vuelos/:vueloId/asientos",jwt,ah(c.disponibilidad));r.get("/comprobantes/:id",jwt,ah(c.comprobante));module.exports=r;

