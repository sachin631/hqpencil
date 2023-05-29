const multer=require("multer");

//config the multer
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads");
    },
    filename:(req,file,cb)=>{
        const filename = `image-${Date.now()}.${file.originalname}`

        cb(null,filename);
    }
});

//apply filter
const filter=(req,file,cb)=>{
    if(file.mimetype==="image/png" || file.mimetype==="image/jpg" || file.mimetype==="image/jpeg"){
        cb(null,true);
    }
    else{
        cb(null,false);
        return cb(new Error("Only .png .jpg & .jpeg formatted Allowed"));
    }
}


//combine storage and other with multer

const upload=multer({
    storage:storage,
    fileFilter:filter
});

module.exports=upload;