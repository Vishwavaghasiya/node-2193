const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema(
    {
        pharmacyName : {
            type : String,
            trim : true,
        },
        address : {
            type : String,
            trim : true,
        },
        pharmacist :{
            type : String,
            trim : true,
        },
        inventory : {
            type : String,
            trim : true,
        },
        prescription : {
            type : String,
            trim : true,
        },
        medications : {
            type : String,
            trim : true,
        },
        product: {
            type: mongoose.Types.ObjectId,
            ref: "product",
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

const Pharmacy = mongoose.model('pharmacy' , pharmacySchema);
module.exports = Pharmacy