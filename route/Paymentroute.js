import express from 'express'
import { findIncomeMonth, findIncomeToday, makePayment } from '../controller/PaymentController.js';

const router =express.Router();

router.post('savePayment',makePayment);
router.get('incomeByDay',findIncomeToday);
router.get('incomeByMonth',findIncomeMonth);



export default router;