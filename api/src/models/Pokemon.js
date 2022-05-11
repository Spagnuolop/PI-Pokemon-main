const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.DECIMAL,
    },
    weight: {
      type: DataTypes.DECIMAL,
    },
    hp: {
      type: DataTypes.DECIMAL,
    },
    attack: {
      type: DataTypes.DECIMAL,
    },
    defense: {
      type: DataTypes.DECIMAL,
    },
    speed: {
      type: DataTypes.DECIMAL,
    },
    image: {
      type: DataTypes.STRING,
    },
    create: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
