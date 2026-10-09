import multer from "multer"

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/temp")
    },
    filename: function(req, file, cb){
        const uniqueSuffix  = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
        // cb(null, file.originalname) //can do like this, whichever name is given by the user, but maybe override by the user giving 5 different files of same name.
    }
})

export const upload = multer({storage,})