'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class usuario extends Model {
        static associate(models) {
            usuario.belongsTo(models.rol);
        }
    }

    usuario.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        protegido: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rolid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        otp: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'usuario',
    });
    return usuario;
};
