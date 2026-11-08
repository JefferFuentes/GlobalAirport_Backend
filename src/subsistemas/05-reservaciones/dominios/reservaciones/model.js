exports.normalizar=b=>{const datos={pasajeroId:Number(b.pasajeroId),vueloId:Number(b.vueloId),asientoId:Number(b.asientoId),metodoPago:b.metodoPago,monto:Number(b.monto)};const errores=[];for(const c of ["pasajeroId","vueloId","asientoId","metodoPago","monto"])if(!datos[c])errores.push(c+" obligatorio");return{datos,errores}};

