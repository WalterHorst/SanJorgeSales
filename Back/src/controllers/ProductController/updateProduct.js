const { Product } = require("../../db");

const updateProduct = async ({ id, name, image, price, description }) => {
  if (!id) throw Error("Please provide a valid ID.");

  if (!(name || image || price || description))
    throw Error("Data is missing for updating the product.");

  const product = await Product.findOne({
    where: { id },
  });
  if (!product) throw Error("Product not found.");
  const updateProductId = await Product.update({
    name: name ? name : product.name,
    image: image ? image : product.image,
    price: price ? price : product.price,
    description: description ? description : product.description, 
  });

  return updateProductId;
};

module.exports = {
  updateProduct,
};
