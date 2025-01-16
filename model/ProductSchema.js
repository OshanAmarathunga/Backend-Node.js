import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required: true
    },
    unitPrice:{
        type:Number,
        required:true
    },
    qtyOnHand:{
        type:Array,
        required:true
    },
    isAcive:{
        type:Boolean,
        required:true
    },
    images:{
        type:Array,
        required:true
    }
});

export default mongoose.model('Product',ProductSchema);

