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

export async function updateCustomer(req,res) {// admin 
    try {
        const updatedCustomer =await Customer.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        );

        if(updatedCustomer){
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

export async function deleteCustomer(req,res){ //admin
    try {
        const deletedCustomer =await Customer.findByIdAndDelete({_id:req.params.id});
        if(deleteCustomer){
            return res.status(204).json({
                message:`Customer deleted`,
                data:deletedCustomer
            })
        }

        res.status(404).json({
            message:"Customer not Found!"
        })
    } catch (e) {
        res.status(500).json({
            deleteError:e.message
        })
    }
}

export async function getCustomerById(req,res){ // all
    const customerId=req.params.id;
    try {
       const getCustomer= await Customer.findOne({_id:customerId});
       if(getCustomer){
        return res.status(200).json({
            message : "Customer found",
            data:getCustomer
        })
       }
       return res.status(404).json({
        message : "Customer not Found",
        
    })
       
    } catch (e) {
        res.status(500).json({
            errorMassage:e.message
        })
    }
}

export async function getAllCustomers(req,res){ //all
    try {
        const {searchText, page=1, size=10} =req.query;
        const filter=searchText?{$or:[
            {customerName:{$regex:searchText, $options:"i"}},
            {address:{$regex:searchText, $options:"i"}},
            {email:{$regex:searchText, $options:"i"}}
        ]}:{};

        const customerList=await Customer.find(filter).skip((page-1)*size).limit(parseInt(size));
        const total=await Customer.countDocuments(filter);

        res.status(200).json({
            message:"Data List",
            dataList:customerList,
            count:total
        })

    } catch (e) {
        res.status(500).json({
            errorMessage:e.message
        })
    }
}