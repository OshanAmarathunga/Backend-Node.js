
import Payment from '../model/PaymentSchema.js'

export async function makePayment(req,res){
    try {
        const newPayment=new Payment(req.body);
        const savedPayment=await newPayment.save();
        res.status(200).json({
            message:"Payment made success!",
            date:savedPayment
        })
    } catch (e) {
        res.status(500).json({
            errorMessage:e.message
        })
    }
}