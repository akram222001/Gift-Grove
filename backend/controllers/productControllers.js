
//new
const Product = require("../models/productModel");

exports.createproduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
//other
exports.getAllproducts = (req, res) => {
    res.status(200).json({ message: "Route is working fine" })
}
