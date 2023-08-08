// product_model
/*----------------
    require mongoose
------------------*/
const mongoose = require("mongoos");

const productSchema = new mongoose.productSchema(
    {
        product_type: {
            // type : String
            type: 'digitalProduct',
            trim: true
        },
        product_name: {
            // type : String
            name: 'Smartphone',
            // To remove excess space
            trim: true
        },
        price: {
            // type : Number
            price: 500,
            trim: true
        }
    }
);

const Product = module.exports = mongoose.model('product', productSchema);

module.exports = Product;