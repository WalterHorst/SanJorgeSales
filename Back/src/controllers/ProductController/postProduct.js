const { Product } = require("../../db");

const createProduct = async ({ name, image, price, description, category, brand }) => {

    if (!(name || image || price || description || category || brand)) {
      throw Error("Data is missing for some products.");
    }
   
    const create = await Product.create({
      name: name,
      image: image,
      price: price,
      description: description, 
      category: category,
      brand: brand,
    });


    return(create);
  }
  


module.exports = {
  createProduct,
};
