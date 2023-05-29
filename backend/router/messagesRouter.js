const express=require("express");
const messageRouter=express.Router();
const messagesController=require("../controller/messagesControler");
const userAuthentication=require("../middleware/userAuthentication");

messageRouter.post("/messageRouter",userAuthentication.userAuthentication,messagesController.messageSent);


module.exports=messageRouter;

