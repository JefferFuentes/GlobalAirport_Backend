const s=require("./service");exports.listar=async(q,r)=>r.json(await s.listar());exports.obtener=async(q,r)=>r.json(await s.obtener(q.params.id));exports.crear=async(q,r)=>r.status(201).json(await s.crear(q.datos));exports.actualizar=async(q,r)=>r.json(await s.actualizar(q.params.id,q.body));exports.cancelar=async(q,r)=>r.json(await s.cancelar(q.params.id,q.body.motivo));

