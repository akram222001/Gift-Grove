const express = require("express");
const { getAllproducts,createproduct } = require("../controllers/productControllers");

const router = express.Router();

router.route("/products").get(getAllproducts);


router.route("/products/new").post(createproduct);

module.exports = router;