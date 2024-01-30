// const Product = require("../models/productModel");

// exports.createproduct = async (req, res, next) => {
//     const Product = await Product.create(req.body);

//     res.status(201).json({
//       success: true,
//       product
//     })
//   } 

// //Get All product
// exports.getAllproducts = async(req, res) => {
//   const products = await product.find();

//     res.status(200).json({ 
//       success: true,
//       products
//      })
// }

const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncError")


//Creat product --Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product: newProduct
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error'
    });
  }
});


//Get All Products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      products
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error'
    });
  }
});

// UPDATE PRODUCT--ADMIN

// exports.updateProduct = async (req, res,next)=>{
//   let product = Product.findById(req,params.id);
//   if(!product){
//     return res.status(500).json({
//       success:false,
//       message:"Product not found"
//     })
//   }

//   product = await Product.findByIdAndUpdate(req,params.id,req.body,{
//     new:true,
//     runValidators:true,
//     useFindAndModify:false
//   });
//   res.status(200).json({
//     success:true,
//     product
//   })
//  }

// Get product -- Admin 
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  try {
    const productId = req.params.id;

    // Find the product by ID
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    res.status(200).json({
      success: true,
      product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error"
    });
  }
});

// UPDATE PRODUCT--ADMIN
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false
    });

    res.status(200).json({
      success: true,
      product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error"
    });
  }
});

// Delete product

// exports.deleteProduct = async (req, res, next) => {
//  const product = await Product.findById(req.params.id);

//  if (!product) {
//   return res.status(500).json({
//     success: false,
//     message: "Product not found"
//   })
// }
// await product.remove()
// res.status(200).json({
//   success: false,
//     message: "product Delete Success"
// })
// }

// Delete product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  try {
    const productId = req.params.id;

    // Check if the product exists
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    // Product found, proceed with deletion
    await Product.findByIdAndDelete(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error"
    });
  }
});