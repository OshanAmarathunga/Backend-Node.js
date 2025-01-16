import express from 'express'
import dotenv from 'dotenv'
import bodyparser from 'body-parser'
import CustomerRouter from './route/CustomerRoute.js'
import OrderRouter from './route/OrderRouter.js'
import PaymentRouter from './route/Paymentroute.js'
import ProductRouter from './route/ProductRouter.js'
import UserRouter from './route/UserRoute.js'
import { DBConnection } from './database/db.js'


dotenv.config();
const app=express();
app.use(bodyparser.json()); 
const port =process.env.PORT || 3000 ;
DBConnection();

//===========================================
app.use('api/v1/customer', CustomerRouter); // http://localhost/api/v1/customer
app.use('api/v1/order',OrderRouter);
app.use('api/v1/payment',PaymentRouter);
app.use('api/v1/product',ProductRouter);
app.use('api/v1/user', UserRouter);
//===========================================


app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
    
})      