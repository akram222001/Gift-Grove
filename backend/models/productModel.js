const mongoose = require("mongoose");
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