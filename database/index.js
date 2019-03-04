const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bonsaihelper', { useNewUrlParser: true });

const db = mongoose.connection;

const Schema = mongoose.Schema;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const postSchema = new Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  body: String,
  dateCreated: Date,
  dateLastEdited: { type: Date, default: Date.now },
  images: [String],
});

// need object.id
const plantSchema = new Schema({
  name: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  plantType: { type: String },
  dateCreated: { type: Date, default: Date.now },
  dateLastEdit: { type: Date, default: Date.now },
  // posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  // posts: [postSchema],
});

const userSchema = new Schema({
  name: String,
  avatarImg: String,
  plants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plant' }],
  // plants: [plantSchema],
});

const User = mongoose.model('User', userSchema);
const Plant = mongoose.model('Plant', plantSchema);
const Post = mongoose.model('Post', postSchema);


// CRUD for Plants

const createPlant = (params) => {
  console.log('params from inside index.js db',params);
  return Plant.create(params);
};

const findAllPlants = () => {
  return Plant.find();
};

// find all plants by query

const plantsByQuery = (query, callback) => {
  console.log('query from within plantsByQuery is ', query);
  Plant.find(query, (err, plants) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, plants);
    }
  });
};

// find all plants for a particular user
// const plantsbyUsername = (name, callback) => {
//   // find plants by specified username
//   User.find(name)
//     .then((user) => {
//       console.log(user);
//     }).catch((err) => {
//       throw err;
//     });
// };

const updatePlant = (plantId, update, callback) => {
  Plant.findByIdAndUpdate(plantId, update, (err, plant) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, plant);
    }
  });
};

const destroyPlant = (plantId, callback) => {
  Plant.find (plantId, (err,plant) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, plant);
    }
  });
};

// CRUD for Posts

// const createPostByPlant

// const readPostByPlant

// const updatePostByPlant

// const destroyPostByPlant

// CRUD for Users

const createUser = (params) => {
  return User.create(params);
};

const readUser = (userId, callback) => {
  User.find(userId, (err, user) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, user);
    }
  });
};

module.exports = {
  createPlant,
  plantsByQuery,
  // plantsbyUsername,
  findAllPlants,
  updatePlant,
  destroyPlant,
  // createPostByPlant,
  // readPostByPlant,
  // updatePostByPlant,
  // destroyPostByPlant,
  createUser,
  // readUser,
};