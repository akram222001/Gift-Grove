// const express = require("express");
// const { getAllproducts,createproduct } = require("../controllers/productControllers");

// const router = express.Router();

// router.route("/products").get(getAllproducts);


// router.route("/products/new").post(createproduct);

// module.exports = router;


const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productControllers");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/products/new").post(createProduct);



router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);
module.exports = router;
