export function normalizar(b) {
    const d = { ...b };

    if (d.aeropuertoId !== undefined) {
        d.aeropuertoId = Number(d.aeropuertoId);
    }

    if (d.usuarioId !== undefined) {
        d.usuarioId = Number(d.usuarioId);
    }

    const errores = [];

    for (const c of ['aeropuertoId', 'usuarioId']) {
        if (d[c] === undefined || d[c] === '') {
            errores.push(c + ' obligatorio');
        }
    }

    return { datos: d, errores };
}

