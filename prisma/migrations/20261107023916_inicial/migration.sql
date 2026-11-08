-- CreateTable
CREATE TABLE `Rol` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Rol_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreCompleto` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `passwordHash` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NULL,
    `estado` ENUM('ACTIVO', 'INACTIVO') NOT NULL DEFAULT 'ACTIVO',
    `rolId` INTEGER NOT NULL,
    `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `actualizadoEn` DATETIME(3) NOT NULL,
    `desactivadoEn` DATETIME(3) NULL,

    UNIQUE INDEX `Usuario_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aeropuerto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `codigoIata` VARCHAR(191) NOT NULL,
    `pais` VARCHAR(191) NOT NULL,
    `ciudad` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Aeropuerto_codigoIata_key`(`codigoIata`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AeropuertoAdministrador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aeropuertoId` INTEGER NOT NULL,
    `usuarioId` INTEGER NOT NULL,

    UNIQUE INDEX `AeropuertoAdministrador_aeropuertoId_usuarioId_key`(`aeropuertoId`, `usuarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Empleado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `aeropuertoId` INTEGER NOT NULL,
    `numeroEmpleado` VARCHAR(191) NOT NULL,
    `puesto` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Empleado_usuarioId_key`(`usuarioId`),
    UNIQUE INDEX `Empleado_numeroEmpleado_key`(`numeroEmpleado`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pasajero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreCompleto` VARCHAR(191) NOT NULL,
    `tipoDocumento` VARCHAR(191) NOT NULL,
    `numeroDocumento` VARCHAR(191) NOT NULL,
    `nacionalidad` VARCHAR(191) NOT NULL,
    `fechaNacimiento` DATETIME(3) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `estado` ENUM('ACTIVO', 'INACTIVO') NOT NULL DEFAULT 'ACTIVO',

    UNIQUE INDEX `Pasajero_numeroDocumento_key`(`numeroDocumento`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aeronave` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aeropuertoId` INTEGER NOT NULL,
    `matricula` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `fabricante` VARCHAR(191) NOT NULL,
    `capacidad` INTEGER NOT NULL,

    UNIQUE INDEX `Aeronave_matricula_key`(`matricula`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AsientoAeronave` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aeronaveId` INTEGER NOT NULL,
    `numero` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AsientoAeronave_aeronaveId_numero_key`(`aeronaveId`, `numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Piloto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `aeropuertoId` INTEGER NOT NULL,
    `numeroLicencia` VARCHAR(191) NOT NULL,
    `nacionalidad` VARCHAR(191) NOT NULL,
    `fechaNacimiento` DATETIME(3) NOT NULL,
    `estado` ENUM('ACTIVO', 'INACTIVO') NOT NULL DEFAULT 'ACTIVO',
    `horasVuelo` DECIMAL(10, 2) NOT NULL DEFAULT 0,

    UNIQUE INDEX `Piloto_usuarioId_key`(`usuarioId`),
    UNIQUE INDEX `Piloto_numeroLicencia_key`(`numeroLicencia`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vuelo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroVuelo` VARCHAR(191) NOT NULL,
    `aeropuertoOrigenId` INTEGER NOT NULL,
    `aeropuertoDestinoId` INTEGER NOT NULL,
    `aeronaveId` INTEGER NOT NULL,
    `salidaProgramada` DATETIME(3) NOT NULL,
    `llegadaProgramada` DATETIME(3) NOT NULL,
    `estado` ENUM('PROGRAMADO', 'ABORDANDO', 'EN_VUELO', 'COMPLETADO', 'CANCELADO') NOT NULL DEFAULT 'PROGRAMADO',

    UNIQUE INDEX `Vuelo_numeroVuelo_key`(`numeroVuelo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VueloPiloto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vueloId` INTEGER NOT NULL,
    `pilotoId` INTEGER NOT NULL,

    UNIQUE INDEX `VueloPiloto_vueloId_pilotoId_key`(`vueloId`, `pilotoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ObservacionVuelo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vueloId` INTEGER NOT NULL,
    `pilotoId` INTEGER NOT NULL,
    `observacion` VARCHAR(191) NOT NULL,
    `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` VARCHAR(191) NOT NULL,
    `pasajeroId` INTEGER NOT NULL,
    `vueloId` INTEGER NOT NULL,
    `asientoId` INTEGER NOT NULL,
    `metodoPago` VARCHAR(191) NOT NULL,
    `monto` DECIMAL(12, 2) NOT NULL,
    `estado` ENUM('CONFIRMADA', 'CHECK_IN', 'CANCELADA') NOT NULL DEFAULT 'CONFIRMADA',
    `canceladaEn` DATETIME(3) NULL,
    `motivoCancelacion` VARCHAR(191) NULL,

    UNIQUE INDEX `Reservacion_codigo_key`(`codigo`),
    UNIQUE INDEX `Reservacion_vueloId_asientoId_key`(`vueloId`, `asientoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CheckIn` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `reservacionId` INTEGER NOT NULL,
    `empleadoId` INTEGER NULL,
    `codigoAbordaje` VARCHAR(191) NOT NULL,
    `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `CheckIn_reservacionId_key`(`reservacionId`),
    UNIQUE INDEX `CheckIn_codigoAbordaje_key`(`codigoAbordaje`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_rolId_fkey` FOREIGN KEY (`rolId`) REFERENCES `Rol`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AeropuertoAdministrador` ADD CONSTRAINT `AeropuertoAdministrador_aeropuertoId_fkey` FOREIGN KEY (`aeropuertoId`) REFERENCES `Aeropuerto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AeropuertoAdministrador` ADD CONSTRAINT `AeropuertoAdministrador_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empleado` ADD CONSTRAINT `Empleado_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empleado` ADD CONSTRAINT `Empleado_aeropuertoId_fkey` FOREIGN KEY (`aeropuertoId`) REFERENCES `Aeropuerto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aeronave` ADD CONSTRAINT `Aeronave_aeropuertoId_fkey` FOREIGN KEY (`aeropuertoId`) REFERENCES `Aeropuerto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AsientoAeronave` ADD CONSTRAINT `AsientoAeronave_aeronaveId_fkey` FOREIGN KEY (`aeronaveId`) REFERENCES `Aeronave`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Piloto` ADD CONSTRAINT `Piloto_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Piloto` ADD CONSTRAINT `Piloto_aeropuertoId_fkey` FOREIGN KEY (`aeropuertoId`) REFERENCES `Aeropuerto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vuelo` ADD CONSTRAINT `Vuelo_aeropuertoOrigenId_fkey` FOREIGN KEY (`aeropuertoOrigenId`) REFERENCES `Aeropuerto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vuelo` ADD CONSTRAINT `Vuelo_aeropuertoDestinoId_fkey` FOREIGN KEY (`aeropuertoDestinoId`) REFERENCES `Aeropuerto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vuelo` ADD CONSTRAINT `Vuelo_aeronaveId_fkey` FOREIGN KEY (`aeronaveId`) REFERENCES `Aeronave`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VueloPiloto` ADD CONSTRAINT `VueloPiloto_vueloId_fkey` FOREIGN KEY (`vueloId`) REFERENCES `Vuelo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VueloPiloto` ADD CONSTRAINT `VueloPiloto_pilotoId_fkey` FOREIGN KEY (`pilotoId`) REFERENCES `Piloto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ObservacionVuelo` ADD CONSTRAINT `ObservacionVuelo_vueloId_fkey` FOREIGN KEY (`vueloId`) REFERENCES `Vuelo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ObservacionVuelo` ADD CONSTRAINT `ObservacionVuelo_pilotoId_fkey` FOREIGN KEY (`pilotoId`) REFERENCES `Piloto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservacion` ADD CONSTRAINT `Reservacion_pasajeroId_fkey` FOREIGN KEY (`pasajeroId`) REFERENCES `Pasajero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservacion` ADD CONSTRAINT `Reservacion_vueloId_fkey` FOREIGN KEY (`vueloId`) REFERENCES `Vuelo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservacion` ADD CONSTRAINT `Reservacion_asientoId_fkey` FOREIGN KEY (`asientoId`) REFERENCES `AsientoAeronave`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CheckIn` ADD CONSTRAINT `CheckIn_reservacionId_fkey` FOREIGN KEY (`reservacionId`) REFERENCES `Reservacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CheckIn` ADD CONSTRAINT `CheckIn_empleadoId_fkey` FOREIGN KEY (`empleadoId`) REFERENCES `Empleado`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
