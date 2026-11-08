const s=require("./service");exports.disponibilidad=async(q,r)=>{const x=await s.disponibilidad(q.params.vueloId);if(!x)return r.status(404).json({mensaje:"Vuelo no encontrado"});r.json(x)};exports.comprobante=async(q,r)=>{const x=await s.comprobante(q.params.id);if(!x)return r.status(404).json({mensaje:"No encontrado"});r.json({comprobante:x})};

