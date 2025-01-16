import express from 'express'
import { deleteCustomer, getAllCustomers, getCustomerById, saveCustomer, updateCustomer } from '../controller/CustomerController.js';

const router=express.Router();

router.post('/saveCustomer', saveCustomer);
router.put('/updateCustomer',updateCustomer);
router.delete('/deleteCustomer', deleteCustomer);
router.get('/getCustomerById:id',getCustomerById);
router.get('getAllCustomers', getAllCustomers);


export default router;
