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

    const totalIncome = data.reduce((sum, payment) => sum + payment.amount, 0);
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

export async function findIncomeMonth(req, res) {
  try {
    //   const day = req.query; //yyyy-mm-dd
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear, now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear, now.getMonth() + 1, 1);

    const data = await Payment.find({
      date: {
        $gtq: startOfMonth,
        $lt: endOfMonth,
      },
    });

    const incomeByDay = data.reduce((sum, payment) => {
      const day = payment.date.toISOString().split("T")[0];
      sum[day] = (sum[day] || 0) + payment.amount;
      return sum;
    }, {});
    res.status(200).json({
      message: "month's income",
      data: {
        month: now.getMonth() + 1,
        income: incomeByDay,
      },
    });
  } catch (e) {
    res.status(500).json({
      errorMessage: e.message,
    });
  }
}
