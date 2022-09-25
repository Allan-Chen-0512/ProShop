import express from 'express'
import multer from 'multer'
import path from 'path'

const router = express.Router();


const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')     // 'uploads' is where we want the "image upload" files to be uploaded to 
    },

    filename(req, file, cb) {      // filename = the name of the file that will be stored as the image
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }

})


/// ----------------------------------------------------------------------------------------------------------------------


function checkFileType(file, cb) { // to check file types 
    const filetypes = /jpeg|jpg|png/; 
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase()) // checks if (path.extname()) is in "filetypes"

    const mimetype = filetypes.test(file.mimetype);   // every file has a mime type

    if (extname, mimetype) {
        return cb(null, true);
    } else {
        cb('Images only')
    }

}


// ("upload” ) This is the middleware to our route.
const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {    // used to check file types 
        checkFileType(file, cb)
    }
})


// ---------------------------------------------------------------------
// Route: '/api/upload/'

router.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`)
})



export default router;