import Order from "../model/OrderSchema.js";

export async function saveOrder(req, res) {
  //admin, manager
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();

    res.status(200).json({
      message: "Order save success!",
      data: savedOrder,
    });
  } catch (e) {
    res.status(500).json({
      errorMessage: e.message,
    });
  }
}

export async function updateOrder(req, res) {
  // admin
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body);

    if (updatedOrder) {
      return res.status(200).json({
        message: "Updated the Order !",
        data: updatedOrder,
      });
    }
    res.status(404).json({
      message: "Order not Found!",
    });
  } catch (e) {
    res.status(500).json({
      errorMessage: e.message,
    });
  }
}

export async function changeOrderStatus(req, res) {
  //admin, manager
  try {
    const id = req.params.id;
    const status = req.body;

    if (!["PENDING", "REJECTED", "COMPLETED", "CANCELLED"].includes(status)) {
      return res.status(400).json({
        message: "Invalid status",
        data: null,
      });
    }

    const updatedOrder = await Order.findByIdAndUpdate(id, { status });

    if (updatedOrder) {
      return res.status(200).json({
        message: "Status Updated",
        data: updatedOrder,
      });
    }

    return res.status(404).json({
      message: "Order not found!",
    });
  } catch (e) {
    res.status(500).json({
      errorMessage: e.message,
    });
  }
}

export async function deleteOrder(req, res) {
  //admin
  const orderId = req.params.id;

  try {
    const deleteOrder = Order.findByIdAndDelete({ _id: orderId });
    if (deleteOrder) {
      return res.status(200).json({
        message: "Order Deleted!",
        data: deleteOrder,
      });
    }

    return res.status(404).json({
      message: "Order Not Found!",
    });
  } catch (e) {
    res.status(500).json({
      errorMessage: e.message,
    });
  }
}

export async function findOrderById(req, res) {
  // admin , manager
  try {
    const orderId = req.params.id;
    const getOrder = await Order.findById({ _id: orderId });
    if (getOrder) {
      return res.status(200).json({
        message: "Order found",
        data: getOrder,
      });
    }
    return res.status(404).json({
      message: "Order not found!",
    });
  } catch (e) {
    res.status(500).json({
      errorMessage: e.message,
    });
  }
}

export async function getAllOrders(req,res){ //manager, admin
    try {
        const {page,size}=req.query;
        const orderList=await Order.find().sort({date:-1}).skip((page-1)*size).limit(size);
        const total=await Order.countDocuments();
        res.status(200).json({
            message:"Order List",
            data:{
                orderList:orderList,
                count:total
            }
        })
    } catch (e) {
        res.status(500).json({
            errorMessage:e.message
        })
    }
}
