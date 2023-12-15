
const { Product } = require('../../db');

const getProduct = async () => {

    const allProduct = await Product.findAll();

    if (!allProduct) {
      throw new Error("There are no products");
    }

    return allProduct;
};

module.exports = {
  getProduct,
};
