const { Product } = require("../../db");

const createProduct = async ({ name, image, price, description, category }) => {

    if (!(name || image || price || description || category)) {
      throw Error("Data is missing for some products.");
    }
   
    const create = await Product.create({
      name: name,
      image: image,
      price: price,
      description: description, 
      category: category,
    });


    return(create);
  }
  


module.exports = {
  createProduct,
};
