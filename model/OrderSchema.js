import mongoose from "mongoose";

const OrderSchema=new mongoose.Schema({
    status:{
        type:String, //PENDING,REJECT, COMPLETED , CANCELLD
        required:true
    },
    products:{
        type:Array,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    customer:{
        type:Object,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

export default mongoose.model('Order',OrderSchema);