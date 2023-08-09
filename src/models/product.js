/*-----
    product.model
-------*/
//require mongoose
const mongoose = require("mongoos");

const productSchema = new mongoose.productSchema(
    {
        product_type: {
            type : String,
            trim: true
        },
        product_name: {
            type : String,
            // To remove excess space
            trim: true
        },
        price: {
            type : Number,
            trim: true
        }
    }
);

const Product = module.exports = mongoose.model('product', productSchema);

module.exports = Product;