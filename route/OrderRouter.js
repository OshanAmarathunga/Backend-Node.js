import express from 'express';
import { saveOrder, updateOrder } from '../controller/OrderController.js';

const router=express.Router();

router.post('/saveOrder',saveOrder);
router.put('/updateOrder:id', updateOrder);


export default router;