'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class pelicula extends Model {
        static associate(models) {
            pelicula.belongsToMany(models.categoria, { as: 'categorias', through: 'categoriapelicula', foreignKey: 'peliculaid' });
            pelicula.belongsTo(models.archivo);
        }
    }

    pelicula.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING,
            defaultValue: "Sin título"
        },
        sinopsis: {
            type: DataTypes.STRING,
            defaultValue: "Sin sinopsis"
        },
        anio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        archivoid: {
            type: DataTypes.INTEGER,
            allowNull: true
        }        
    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'pelicula',
    });

    return pelicula;
};