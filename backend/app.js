require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const RegisterUserRouter=require("./router/RegisterUserRouter");
const ProductRouter = require("./router/ProductRouter");
const orderRouter=require("./router/OrderRouter");
require("./DBconnection/conn");
const bodyParser = require("body-parser");

try{

  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }))
  
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });
  app.use(express.json());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended:true}))
  // app.use(bodyParser.json()); //use one from body parser or express.json
  
  
  
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use(ProductRouter);//router ko last mae rkhna h ye issue
  app.use(RegisterUserRouter);
  app.use(orderRouter);
  
  app.listen(process.env.PORT, () => {
    console.log(`server start properly at  ${process.env.PORT}`);
  });

}catch(error){
  console.log(error);
}

