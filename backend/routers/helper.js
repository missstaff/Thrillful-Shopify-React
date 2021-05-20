import multer from 'multer';

const upload2 = multer({
    limits:{
        fileSize: 4 * 1024 * 1024
    }
})
module.exports=  upload2;