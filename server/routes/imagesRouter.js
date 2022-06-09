const express = require('express');
const imagesController = require('../controllers/imagesController');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname,'../uploads/'));
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({storage: storage});

router.get('/', imagesController.getImages, (req,res) => {
  res.status(200).json(res.locals.allImgs)
});

router.post('/upload', upload.single('image'), imagesController.createImage, (req, res) => {
  res.status(200).redirect('/')
});

router.delete('/delete/:id', imagesController.deleteImage, (req,res) => {
  fs.unlink(res.locals.imgDeleted.imageRoute, (err) => {
    if(err) throw Error;
    console.log(`file ${res.locals.imgDeleted.storedName} was sucessfully deleted`);
  })
  res.status(200).redirect('/')
})

module.exports = router;