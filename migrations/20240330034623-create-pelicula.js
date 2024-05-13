'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('pelicula', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            titulo: {
                type: Sequelize.STRING,
                defaultValue: "Sin título"
            },
            sinopsis: {
                type: Sequelize.STRING,
                defaultValue: "Sin sinopsis"
            },
            anio: {
                type: Sequelize.INTEGER
            },
            archivoid: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'archivo',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('pelicula');
    }
};