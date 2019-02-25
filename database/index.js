const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bonsaihelper');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const postSchema = mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  body: String,
  dateCreated: Date,
  dateLastEdited: { type: Date, default: Date.now },
  images: [String],
});

const plantSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  plantType: String,
  dateCreated: Date,
  dateLastEdit: { type: Date, default: Date.now },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
});

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  avatarImg: String,
  plants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plant' }],
});

const User = mongoose.model('User', userSchema);
const Plant = mongoose.model('Plant', plantSchema);
const Post = mongoose.model('Post', postSchema);


// CRUD for Plants

const createPlant = (params, callback) => {

  Plant.create(params, (err, plants) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, plants);
    }
  });
};

const readPlant = (plantId, callback) => {
  Plant.find(plantId, (err, plants) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, plants);
    }
  });
}

const updatePlant = (plantId, update, callback) => {
  Plant.findByIdAndUpdate(plantId, update, (err, plant) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, plant);
    }
  })
};

const destroyPlant = (plantId, callback) => {
  Plant.find (plantId, (err,plant) => {
    if (err {
      callback(err, null);
    } else {
      callback(null, plant);
    })
  })
}

// CRUD for Posts

const createPostByPlant

const readPostByPlant

const updatePostByPlant

const destroyPostByPlant

module.exports = {
  createPlant,
  readPlant,
  updatePlant,
  destroyPlant,
  createPostByPlant,
  readPostByPlant,
  updatePostByPlant,
  destroyPostByPlant,
};