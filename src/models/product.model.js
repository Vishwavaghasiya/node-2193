const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_type: {
            type: String,
            trim: true,
        },
        product_name: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            trim: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category",
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timeStamps: true,
        versionKey: false,
    }
);

const Product = mongoose.model('product', productSchema);
module.exports = Product;