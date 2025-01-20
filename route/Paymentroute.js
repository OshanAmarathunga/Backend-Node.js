import express from 'express'
import { findIncomeMonth, findIncomeToday, makePayment } from '../controller/PaymentController.js';
import verifyToken from '../middleware/Auth.js';

const router =express.Router();

router.post('savePayment',verifyToken(['admin','manager']),makePayment);
router.get('incomeByDay',verifyToken(['admin','manager']),findIncomeToday);
router.get('incomeByMonth',verifyToken(['admin','manager']),findIncomeMonth);


export default router;