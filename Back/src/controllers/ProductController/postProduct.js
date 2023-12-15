const { Product } = require("../../db");

const createProduct = async ({ name, image, price }) => {

    if (!(name || image || price)) {
      throw Error("Data is missing for some products.");
    }
   
    const create = await Product.create({
      name: name,
      image: image,
      price: price,
    });


    return(create);
  }
  


module.exports = {
  createProduct,
};
