const mongoose=require("mongoose");
const validator=require ("validator");

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    mobile:{
        type:String,
        required:true
    },
    message:[{}]
});


schema.methods.MessageSave=async function (message){
    try{
        this.message=this.message.concat({message});
        await this.save();
        return message;

    }catch(error){
        console.log(error)
    }
  

}

const messagesModel=new mongoose.model("messages",schema);


module.exports=messagesModel;