const mongoose = require('mongoose');

const jewellerySchema = new mongoose.Schema(
    {
        shopName : {
            type : String,
            trim : true,
        },
        itemCode : {
            type : String,
            trim : true,
        },
        itemName : {
            type : String,
            trim : true,
        },
        category : {
            type : String,
            trim : true,
        },
        material : {
            type : String,
            trim : true,
        },
        price : {
            type : Number,
            trim : true,
        },
        availableStock : {
            type : String,
            trim : true,
        },
        designer : {
            type : String,
            trim : true,
        },
        is_active : {
            type : Boolean,
            trim : true,
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Jewellery = mongoose.model('jewellery' , jewellerySchema);
module.exports = Jewellery