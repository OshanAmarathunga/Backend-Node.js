import express from 'express'
import { makePayment } from '../controller/PaymentController.js';

const router =express.Router();

router.post('savePayment',makePayment);



export default router;