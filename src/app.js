require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./shared/middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/salud", (req, res) => {
  return res.json({ estado: "ok" });
});

app.use("/api/auth", require("./subsistemas/01-seguridad-rh/dominios/auth/routes"));
app.use("/api/usuarios", require("./subsistemas/01-seguridad-rh/dominios/usuario/routes"));
app.use("/api/roles", require("./subsistemas/01-seguridad-rh/dominios/rol/routes"));
app.use("/api/empleados", require("./subsistemas/01-seguridad-rh/dominios/empleado/routes"));
app.use("/api/aeropuertos", require("./subsistemas/02-infraestructura/dominios/aeropuerto/routes"));
app.use("/api/asignaciones-administradores", require("./subsistemas/02-infraestructura/dominios/administrador/routes"));
app.use("/api/aeronaves", require("./subsistemas/02-infraestructura/dominios/aeronave/routes"));
app.use("/api/asientos", require("./subsistemas/02-infraestructura/dominios/asiento/routes"));
app.use("/api/pasajeros", require("./subsistemas/03-pasajeros/dominios/pasajero/routes"));
app.use("/api/vuelos", require("./subsistemas/04-operaciones-vuelo/dominios/vuelos/routes"));
app.use("/api/asignaciones-pilotos", require("./subsistemas/04-operaciones-vuelo/dominios/asignacionPiloto/routes"));
app.use("/api/reservaciones", require("./subsistemas/05-reservaciones/dominios/reservaciones/routes"));
app.use("/api/checkin", require("./subsistemas/05-reservaciones/dominios/checkin/routes"));
app.use("/api/pilotos", require("./subsistemas/06-pilotos-control/dominios/piloto/routes"));
app.use("/api/observaciones", require("./subsistemas/06-pilotos-control/dominios/observacion/routes"));
app.use("/api", require("./subsistemas/05-reservaciones/dominios/operacion-reserva/routes"));
app.use("/api", require("./subsistemas/07-reportes/dominios/reportes/routes"));

app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log("API lista en http://localhost:3000/api");
});
