import express from 'express'
import { savePayment } from '../controller/PaymentController.js';

const router =express.Router();

router.post('savePayment',savePayment);


export default router;