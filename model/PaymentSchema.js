import mongoose from "mongoose";

const PaymentSchema=new mongoose.Schema({
    order:{
        type:Object,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    tax:{
        type:Number,
        required:true
    },
    discount:{
        type:Array,
        required:true
    },
    extraCharges:{
        type:Array, //[{reason:'',amount:'250'}]
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    transactionDetail:{
        type:Object,
        required:true
    }
    

});

export default mongoose.model('Payment',PaymentSchema);