const { Op } = require('sequelize');
const { Product } = require('../../db');

const getProductByName = async ({ name }) => {
  if (!name) throw Error('Name parameter is required.');
  const resultados = await Product.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      }
    }
  });
  return resultados;
};


module.exports = {
    getProductByName
}
