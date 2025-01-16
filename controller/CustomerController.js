import Customer from "../model/CustomerSchema.js";

export function saveCustomer(req,res){
    res.status(201).json({
        msg:"ok"
    })
    
}