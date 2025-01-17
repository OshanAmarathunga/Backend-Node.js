import express from 'express'
import { deleteCustomer, getAllCustomers, getCustomerById, saveCustomer, updateCustomer } from '../controller/CustomerController.js';
import { verify } from 'jsonwebtoken';
import verifyToken from '../middleware/Auth.js';

const router=express.Router();


router.post('/saveCustomer',verifyToken(['admin','manager']), saveCustomer);
router.put('/updateCustomer/:id',verifyToken(['admin']),updateCustomer);
router.delete('/deleteCustomer/:id',verifyToken(['admin']), deleteCustomer);
router.get('/getCustomerById/:id',verifyToken(['admin','manager','user']),getCustomerById);
router.get('getAllCustomers',verifyToken(['admin','manager','user']), getAllCustomers);


export default router;
