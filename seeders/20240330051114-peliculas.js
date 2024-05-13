'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('pelicula', [
            { id: 1, titulo: "Sueño de fuga", sinopsis: "El banquero Andy Dufresne es arrestado por matar a su esposa y amante. Tras una dura adaptación, intenta mejorar las condiciones de la prisión y dar esperanza a sus compañeros.", anio: 1994, createdAt: new Date(), updatedAt: new Date() },
            { id: 2, titulo: "El padrino", sinopsis: "El patriarca de una organización criminal transfiere el control de su clandestino imperio a su reacio hijo.", anio: 1972, createdAt: new Date(), updatedAt: new Date() },
            { id: 3, titulo: "El caballero oscuro", sinopsis: "Cuando el Joker emerge causando caos y violencia en Gotham, el caballero de la noches deberá aceptar una de las pruebas psicológicas y físicas más difíciles para poder luchar con las injusticias del enemigo.", anio: 2008, createdAt: new Date(), updatedAt: new Date() },
            { id: 4, titulo: "El retorno del rey", sinopsis: "Gandalf y Aragorn lideran el Mundo de los hombres, e intentarán atraer la atención de Sauron para darle a Frodo la última oportunidad de completar su misión y así tratar de evitar sucumbir a las continuas tentaciones del Anillo.", anio: 2003, createdAt: new Date(), updatedAt: new Date() },
            { id: 5, titulo: "Tiempos violentos", sinopsis: "Las vidas de dos mafiosos, un boxeador, la esposa de un gánster y un par de bandidos se entrelazan en cuatro historias de violencia y redención.", anio: 1994, createdAt: new Date(), updatedAt: new Date() },
            { id: 6, titulo: "Forrest Gump", sinopsis: "Las presidencias de Kennedy y Johnson, los eventos de Vietnam, Watergate vistas desde la perspectiva de un hombre de Alabama con un coeficiente intelectual de 75.", anio: 1994, createdAt: new Date(), updatedAt: new Date() },
            { id: 7, titulo: "El club de la pelea", sinopsis: "Un hombre deprimido conoce a un fabricante de jabones, y juntos forman un club de pelea clandestino que evoluciona en algo inesperado.", anio: 1999, createdAt: new Date(), updatedAt: new Date() },
            { id: 8, titulo: "Inception", sinopsis: "A un ladrón que roba secretos corporativos a través de la tecnología de entrar en el subconsciente, se le da la tarea de implantar una idea en la mente del jefe de una gran empresa.", anio: 2010, createdAt: new Date(), updatedAt: new Date() },
            { id: 9, titulo: "Star Wars: Episodio V - El imperio contraataca", sinopsis: "Los rebeldes han vencido al Imperio en el planeta helado Hoth. Luke Skywalker empieza a entrenar como Jedi con Yoda, mientras sus amigos son perseguidos por Darth Vader.", anio: 1980, createdAt: new Date(), updatedAt: new Date() },
            { id: 10, titulo: "Matrix", sinopsis: "Un hacker se da cuenta por medio de otros rebeldes de la naturaleza de su realidad y su rol en la guerra contra los controladores.", anio: 1999, createdAt: new Date(), updatedAt: new Date() },
            { id: 11, titulo: "Interestelar", sinopsis: "Un grupo de exploradores prueban los saltos a través de agujeros de gusano en búsqueda de la sobrevivencia de la humanidad.", anio: 2014, createdAt: new Date(), updatedAt: new Date() },
            { id: 12, titulo: "Dune: Parte dos", sinopsis: "Paul Atreides se une a Chani y los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia.", anio: 2024, createdAt: new Date(), updatedAt: new Date() },
            { id: 13, titulo: "Terminador 2: El juicio final", sinopsis: "Un cyborg, idéntico al que fracasó al asesinar a Sarah Connor, ahora debe proteger al hijo adolescente de un cyborg más avanzado y poderoso.", anio: 1991, createdAt: new Date(), updatedAt: new Date() },
            { id: 14, titulo: "Volver al futuro", sinopsis: "Marty McFly, un estudiante de 17 años, es enviado accidentalmente treinta años al pasado en un artefacto inventado por su amigo.", anio: 1995, createdAt: new Date(), updatedAt: new Date() },
            { id: 15, titulo: "Barbie", sinopsis: "Vivir en Barbie Land es ser un ser perfecto en un lugar perfecto. A menos que tengas una crisis existencial completa. O seas Ken.", anio: 2023, createdAt: new Date(), updatedAt: new Date() }
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('pelicula', null, {});
    }
};
