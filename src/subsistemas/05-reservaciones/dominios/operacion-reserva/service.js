const r=require("./repository");exports.disponibilidad=async id=>{const v=await r.vuelo(id);if(!v)return null;const o=new Set(v.reservaciones.map(x=>x.asientoId));return v.aeronave.asientos.map(x=>({...x,disponible:!o.has(x.id)}))};exports.comprobante=r.comprobante;

