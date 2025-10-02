import multer from 'multer'
import __dirname from '../../__dirname.js'

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, `${__dirname}/src/uploads/caratulas`)
    },
    filename: function(req,file,cb){
        cb(null, req.user.nombre + ' - ' + file.originalname )
    }
})

export const upload = multer({storage: storage})