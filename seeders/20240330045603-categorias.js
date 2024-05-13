'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('categoria', [
            { id: 1, nombre: 'Acción', protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 2, nombre: "Aventura", protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 3, nombre: "Animación", protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 4, nombre: "Ciencia ficción", protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 5, nombre: "Comedia", protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 6, nombre: "Crimen", protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 7, nombre: "Documental", protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 8, nombre: "Drama", protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 9, nombre: "Familiar", protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 10, nombre: "Fantasia", protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 11, nombre: "Historia", protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 12, nombre: "Horror", protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 13, nombre: "Musica", protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 14, nombre: "Misterio", protegida: true, createdAt: new Date(), updatedAt: new Date() },
            { id: 15, nombre: "Romance", protegida: true, createdAt: new Date(), updatedAt: new Date() }
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('categoria', null, {});
    }
};
