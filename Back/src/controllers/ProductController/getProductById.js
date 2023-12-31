const { Product } = require('../../db')

const getProductById = async ({ id }) => {
    if (!id) throw Error("Please provide a valid ID.")
    const productByID = await Product.findOne({
        where: { id }
    })

    if (!productByID) {
        throw new Error("Product not found.");
    }
    return productByID
}

module.exports = {
    getProductById
}
