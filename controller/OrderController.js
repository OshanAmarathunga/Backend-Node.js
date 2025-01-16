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
};

export async function updateOrder(req,res){// admin
    try {
       const updatedOrder= await Order.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        if(updatedOrder){
            return res.status(200).json({
                message:"Updated the Order !",
                data:updatedOrder
            })
        }
        res.status(404).json({
            message:"Order not Found!"
        })

    } catch (e) {
        res.status(500).json({
            errorMessage:e.message
        })
    }
}