const { DataTypes } = require("sequelize");

module.exports = (sql) => {
  sql.define("type", {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
};
