require("dotenv").config();

const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const roles = [
  ["ADMIN_GENERAL", "Administrador General"],
  ["ADMIN_AEROPUERTO", "Administrador de Aeropuerto"],
  ["EMPLEADO", "Empleado"],
  ["PILOTO", "Piloto"],
];

async function main() {
  for (const [codigo, nombre] of roles) {
    await prisma.rol.upsert({
      where: { codigo },
      update: { nombre },
      create: { codigo, nombre },
    });
  }

  const rol = await prisma.rol.findUnique({
    where: { codigo: "ADMIN_GENERAL" },
  });
  const correo = (
    process.env.ADMIN_CORREO || "admin@globalairport.com"
  ).toLowerCase();

  await prisma.usuario.upsert({
    where: { correo },
    update: { rolId: rol.id, estado: "ACTIVO" },
    create: {
      nombreCompleto: "Administrador General",
      correo,
      passwordHash: await bcrypt.hash(process.env.ADMIN_PASSWORD || "Admin12345", 10),
      rolId: rol.id,
    },
  });

  console.log("Seed completado: roles y administrador general");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
