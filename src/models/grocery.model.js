const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema(
    {
        itemName : {
            type : String,
            trim : true,
        },
        category : {
            type : String,
            trim : true,
        },
        brand : {
            type : String,
            trim : true,
        },
        quantity : {
            type : String,
            trim : true,
        },
        expirationDate : {
            type : String,
            trim : true,
        },
        notes : {
            type : String,
            trim : true,
        },
        inStock : {
            type : String,
            trim : true,
        },
        supplier : {
            type : String,
            trim : true,
        },
        is_active : {
            type : Boolean,
            default : true,
        }
    },
    {
        timestamps : true,
        versionKey : false,
    }
);

const Grocery = mongoose.model('grocery' , grocerySchema);
module.exports = Grocery