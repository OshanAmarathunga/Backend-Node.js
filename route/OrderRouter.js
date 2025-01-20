import express from 'express';
import { changeOrderStatus, deleteOrder, findOrderById, getAllOrders, saveOrder, updateOrder } from '../controller/OrderController.js';
import verifyToken from '../middleware/Auth.js';

const router=express.Router();

router.post('/saveOrder',verifyToken(['admin','manager']),saveOrder);
router.put('/updateOrder/:id',verifyToken(['admin']), updateOrder);
router.put('/changeOrderStatus/:id', changeOrderStatus);
router.delete('/deleteOrder/:id',verifyToken(['admin']), deleteOrder);
router.get('/findOrderById/:id',verifyToken(['admin','manager','user']),findOrderById );
router.get('/getAllOrders',verifyToken(['admin','manager']), getAllOrders);


export default router; 