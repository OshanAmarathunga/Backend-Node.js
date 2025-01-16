import Customer from "../model/CustomerSchema.js";

export async function saveCustomer(req,res){ //admin / manager
    try{
        const customer = new Customer(req.body);
        const savedCustomer =await customer.save();
        res.status(201).json({
            mesage:"Customer Saved",
            data:savedCustomer
        })
    }catch(e){
        res.status(500).json({
            saveError:e.message
        })
    }
}

export async function updateCustomer(req,res) {// admin , manager
    try {
        const updatedCustomer =await Customer.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        );

        if(updateCustomer){
          return  res.status(201).json({
                message:"Update success",
                data:updatedCustomer
            })
        }
        return res.status(404).json({
            message:"Customer not found!"
        })

    } catch (e) {
        res.status(500).json({
            updateError:e.message
        })
    }
}