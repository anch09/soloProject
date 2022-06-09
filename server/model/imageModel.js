const mongoose = require('mongoose');

const MONG_URI  = 'mongodb+srv://anch09:1234@clustersolo.lzihhvb.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONG_URI, {
  useNewUrlParser: true,
  // useUnifiedTopolgy: true,
  dbName: 'photos'
})
  .then(() => console.log('Connected to the DB'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const imagesSchema = new Schema({
  imageName: {type: String, required: true},
  storedName: {type: String, required: true},
  mimetype: {type: String, required: true},
  imageRoute: {type: String, required: true},
  imageSize: Number
})

const Image = mongoose.model('images', imagesSchema);

module.exports = Image;