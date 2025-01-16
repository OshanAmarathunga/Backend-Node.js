import mongoose from "mongoose";

const OrderSchema=new mongoose.Schema({
    
    products:{
        type:Array,
        required:true
    },
    
    total:{
        type:Number,
        required:true
    },
    status:{
        type:String, //PENDING,REJECT, COMPLETED , CANCELLD
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