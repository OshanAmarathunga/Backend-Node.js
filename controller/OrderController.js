import Order from '../model/OrderSchema.js'

export async function saveOrder(req,res){ //admin, manager
    try {
        const newOrder=new Order(req.body);
        const savedOrder=await newOrder.save();

        res.status(200).json({
            message:"Order save success!",
            data:savedOrder
        });
        
    } catch (e) {
        res.status(500).json({
            errorMessage:e.message
        })
    }
}