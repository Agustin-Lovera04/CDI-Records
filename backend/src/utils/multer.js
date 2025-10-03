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

export const upload = multer({storage: storage,
    limits: {
    fileSize: 10 * 1024 * 1024 
  },
    fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/bmp", "image/tiff"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(null,false);
    }
    cb(null, true);
  }
})