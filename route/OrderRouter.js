import express from 'express';
import { changeOrderStatus, deleteOrder, saveOrder, updateOrder } from '../controller/OrderController.js';

const router=express.Router();

router.post('/saveOrder',saveOrder);
router.put('/updateOrder:id', updateOrder);
router.put('/changeOrderStatus:id', changeOrderStatus);
router.delete('/deleteOrder:id', deleteOrder);


export default router;