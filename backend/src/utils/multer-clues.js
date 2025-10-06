import multer from 'multer'
import __dirname from '../../__dirname.js'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/src/uploads/audios`)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const allowedTypes = ['audio/mpeg', 'audio/wav', 'audio/flac']

const fileFilter = (req, file, cb) => {
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(null,false);
  }
  cb(null, true)
}

export const uploadClues = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, 
  fileFilter
})
