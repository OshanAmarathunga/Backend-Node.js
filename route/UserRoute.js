import express from 'express';
import { login, signup } from '../controller/UserController.js';

const router=express.Router();

router.post('/signUpUser', signup);
router.post('/login',login);

export default router;