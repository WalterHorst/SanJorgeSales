const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allownull: false,
      },
      image: {
        type: DataTypes.STRING,
        allownull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allownull: false,
      },
      description: {
        type: DataTypes.STRING,
        allownull: false,
      },
      category: {
        type: DataTypes.STRING,
        allownull: false,
      },
      
    },
    { timestamps: true }
  );
};