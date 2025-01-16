import Customer from "../model/CustomerSchema.js";

export async function saveCustomer(req,res){ //admin / manager
    try{
        const customer = new Customer(req.body);
        const savedCustomer =await customer.save();
        res.status(201).json({
            mesage:"Customer Saved",
            data:saveCustomer
        })
    }catch(e){
        res.status(500).json({
            error:e.message
        })
    }
}