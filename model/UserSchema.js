import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    role:{
        type:Array,//{roleName:'MANAGER'},{roleName:'USER'},{roleName:'HOST'}
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
})

export default mongoose.model('User',UserSchema);