const mongoose = require("mongoose");
<<<<<<< HEAD

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter product category"],
    maxLength: [50, "Category cannot exceed 50 characters"],
    default: "Laptop",
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
=======
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
      },
      description: {
        type: String,
        required: [true, "Please enter product description"],
      },
      price: {
        type: Number,
        required: [true, "Please enter product price"],
        maxLength: [8, "Price cannot exceed 8 characters"],
      },
      rating:{
        type:Number,
        dufault:0
      },
    images:[
        {
        public_id:{
            type:String,
            require:true
        },
        url:{
            type:String,
            require:true
        }
    }
],
catagory:{
    type:String,
    require:[true, "please Enter Product Stock"],
    maxLength:[4, "Stock cannot exceed 4 characters"],
    default:1
},
numOfRevidews:{
    type:Number,
    default:0
},
reviews:[
    {
        name:{
            type:String,
            require:true,
        },
        rating:{
            type:Number,
            require:true,
        },
        comment:{
            type:String,
            require:true,
        }
    }
],
createdAt:{
    type:Date,
    default:Date.now
}
})
module.exports = mongoose.model("product",productSchema);
>>>>>>> 8b14a83dc11a0f79d1d0acb2d027f69792876dcd
