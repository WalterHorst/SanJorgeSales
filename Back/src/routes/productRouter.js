const { Router } = require("express");
const { postProductHandler, getProductHandler, getProductByIdHandler, deleteProductHandler, updateProductHandler, getProductByNameHandler} = require("../handlers/productHandler");

const productRouter = Router()

productRouter.post("/create", postProductHandler)
productRouter.get("/allProducts", getProductHandler)
productRouter.get("/", getProductByNameHandler)
productRouter.put("/update", updateProductHandler)
productRouter.get("/:id", getProductByIdHandler)
productRouter.delete("/delete/:id", deleteProductHandler)


module.exports = productRouter