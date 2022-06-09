const Image = require('../model/imageModel');

const imagesController = {};

imagesController.getImages = (req, res, next) => {
  Image.find({}, (err, images) => {
    if(err) return next({
      log: 'Error in imagesController.getImages: it is\'nt possible to fetch all Images',
      message: {err: 'Error in imagesController.getImages'}
    })
    res.locals.allImgs = images;
    return next();
  })
}

imagesController.createImage = (req, res, next) => {
  const { originalname, mimetype, path, filename, size } = req.file;
  Image.create({
    imageName: originalname,
    storedName: filename,
    mimetype,
    imageRoute: path,
    imageSize: size
  }, (err, image) => {
    if(err) return next({
      log: 'Error in imagesController.createImage: it is\'nt possible to create a new Image',
      message: {err: 'Error in imagesController.createImage'}
    })
    res.locals.newImg = image;
    return next();
  })
}

imagesController.deleteImage = (req, res, next) => {
  const {id} = req.params;
  Image.findOneAndDelete({_id: id}, (err, imgDeleted) => {
    if(err) return next({
      log: 'Error in imagesController.deleteImage: it is\'nt possible to delete the Image',
      message: {err: 'Error in imagesController.deleteImage'}
    })
    res.locals.imgDeleted = imgDeleted;
    return next();
  });
}

module.exports = imagesController;