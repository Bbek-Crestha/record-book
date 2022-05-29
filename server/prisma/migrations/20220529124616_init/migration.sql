-- CreateTable
CREATE TABLE `tenants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `contact` INTEGER NOT NULL,
    `document` VARCHAR(191) NOT NULL,
    `total_amount` INTEGER NOT NULL,
    `paid_amount` INTEGER NOT NULL,
    `remaining_amount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `month` VARCHAR(191) NOT NULL,
    `amount` VARCHAR(191) NOT NULL,
    `tenant_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rooms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `room_number` INTEGER NOT NULL,
    `isVacant` BOOLEAN NOT NULL,
    `occupied_from` DATETIME(3) NULL,
    `occupied_till` DATETIME(3) NULL,
    `dimension` VARCHAR(191) NULL,
    `cost` INTEGER NOT NULL,
    `tenant_id` INTEGER NOT NULL,

    UNIQUE INDEX `rooms_room_number_key`(`room_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wifi_users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `isWifiUser` BOOLEAN NOT NULL,
    `device_count` INTEGER NULL,
    `total_amount` INTEGER NULL,
    `tenant_id` INTEGER NOT NULL,

    UNIQUE INDEX `wifi_users_tenant_id_key`(`tenant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `electricity_charges` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `prev_unit` INTEGER NOT NULL,
    `new_unit` INTEGER NOT NULL,
    `cost_per_unit` INTEGER NOT NULL,
    `total_cost` INTEGER NOT NULL,
    `room_id` INTEGER NOT NULL,

    UNIQUE INDEX `electricity_charges_room_id_key`(`room_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `water_charges` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `isWaterUser` BOOLEAN NOT NULL,
    `total_amount` INTEGER NULL,
    `tenant_id` INTEGER NOT NULL,

    UNIQUE INDEX `water_charges_tenant_id_key`(`tenant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `waste_charges` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `isWasteManagementUser` BOOLEAN NOT NULL,
    `total_amount` INTEGER NULL,
    `tenant_id` INTEGER NOT NULL,

    UNIQUE INDEX `waste_charges_tenant_id_key`(`tenant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `rents` ADD CONSTRAINT `rents_tenant_id_fkey` FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rooms` ADD CONSTRAINT `rooms_tenant_id_fkey` FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `wifi_users` ADD CONSTRAINT `wifi_users_tenant_id_fkey` FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `electricity_charges` ADD CONSTRAINT `electricity_charges_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `water_charges` ADD CONSTRAINT `water_charges_tenant_id_fkey` FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `waste_charges` ADD CONSTRAINT `waste_charges_tenant_id_fkey` FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
