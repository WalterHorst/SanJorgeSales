const { Product } = require("../../db");

const createProduct = async ({ name, image, price, description }) => {

    if (!(name || image || price || description)) {
      throw Error("Data is missing for some products.");
    }
   
    const create = await Product.create({
      name: name,
      image: image,
      price: price,
      description: description, 
    });


    return(create);
  }
  


module.exports = {
  createProduct,
};
