import express from 'express';
import { saveOrder } from '../controller/OrderController.js';

const router=express.Router();

router.post('/saveOrder',saveOrder);


export default router;