import Payment from "../model/PaymentSchema.js";

export async function makePayment(req, res) {
  try {
    const newPayment = new Payment(req.body);
    const savedPayment = await newPayment.save();
    res.status(200).json({
      message: "Payment made success!",
      date: savedPayment,
    });
  } catch (e) {
    res.status(500).json({
      errorMessage: e.message,
    });
  }
}

export async function findIncomeToday(req, res) {
  try {
    const day = req.query; //yyyy-mm-dd
    const startDay = new Date(day);
    const endDay = new Date(day);

    endDay.setDate(endDay.getDate() + 1);
    const data = await Payment.find({
      date: {
        $gtq: startDay,
        $lt: endDay,
      },
    });

    const totalIncome = data.reduce((sum, payment) => {
      sum + payment.amount, 0;
    });
    res.status(200).json({
      message: "today's income",
      data: totalIncome,
    });
  } catch (e) {
    res.status(500).json({
      errorMessage: e.message,
    });
  }
}
