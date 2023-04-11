const express=require("express");
const orderRouter=express.Router();
const orderController=require("../controller/orderController");
const userAuthentication=require("../middleware/userAuthentication");



//create User Order
orderRouter.post("/createuserorder",userAuthentication.userAuthentication,orderController.createUserOrder);
//getSingleOrder //something missing not behave expected
orderRouter.get("/getsingleorder/:_id",userAuthentication.userAuthentication,orderController.getSingleorder);
//getorder for loged In User
orderRouter.get("/myorder",userAuthentication.userAuthentication,orderController.myOrder);
//get all order for --admin with total amout of order placed
orderRouter.get("/allorder",userAuthentication.userAuthentication,userAuthentication.authorizeRole("admin"),orderController.allOrder);
//update order Status --admin
orderRouter.put("/orderstatus/:_id",userAuthentication.userAuthentication,userAuthentication.authorizeRole("admin"),orderController.orderStatus);
//delete Order
orderRouter.delete("/deleteparticularorder/:_id",userAuthentication.userAuthentication,userAuthentication.authorizeRole("admin"),orderController.deleteOrder);





   
module.exports=orderRouter; 