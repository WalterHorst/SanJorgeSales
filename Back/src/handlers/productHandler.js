const { getProduct } = require("../controllers/ProductController/getProduct");
const {
  getProductById,
} = require("../controllers/ProductController/getProductById");
const {
  createProduct,
} = require("../controllers/ProductController/postProduct");
const {
  deleteProduct,
} = require("../controllers/ProductController/deleteProduct");
const {
  updateProduct,
} = require("../controllers/ProductController/updateProduct");
const {
  getProductByName,
} = require("../controllers/ProductController/getproductByName");

const postProductHandler = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductHandler = async (req, res) => {
  try {
    const allProduct = await getProduct();
    res.status(201).json(allProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductByIdHandler = async (req, res) => {
  try {
    const productById = await getProductById(req.params);
    res.status(201).json(productById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteProductHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteProduct(+id);

    res.status(200).send("💥Product has been deleted💥");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProductHandler = async (req, res) => {
  try {
    const response = await updateProduct(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductByNameHandler = async (req, res) => {
  try {
    const respuesta = await getProductByName(req.query);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postProductHandler,
  getProductHandler,
  getProductByIdHandler,
  deleteProductHandler,
  updateProductHandler,
  getProductByNameHandler,
};
