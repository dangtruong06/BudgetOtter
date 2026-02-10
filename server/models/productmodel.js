import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    purchase:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

})

const Product = mongoose.model("Product", productSchema)
export default Product