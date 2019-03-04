const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const cors = require('cors');

const { createPlant,
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
} = require('../database');

const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());

app.use(express.static(__dirname + '/../client/dist'));

// get = read
app.get(`/plants/:plant`, (req, res) => {
  // console.log('hello there from plants GET request');
  // let plantId = req.params.plant;
  // readPlant(plantId, (err, data) => {
  //   if (err) {
  //     return res.status(500).send(err);
  //   }
  //   return res.status(200).json(data);
  // });
});

// plants query

// app.get(`/plants`, (req, res) => {
//   // console.log('request parameters are: ', req.params);
//   // console.log('request query parameters are: ', req.query);s
//   plantsByQuery(req.query)
//     .then((plants) => {
//       console.log(plants);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   return res.status(200).send(req.query);
// });

// find all plants

app.get('/plants/', (req, res) => {
  findAllPlants()
    .then((plants) => {
      console.log(plants);
      return res.status(200).send(plants);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

// post = create
app.post(`/plants/`, (req, res) => {
  let params = req.body;
  createPlant(params)
    .then((data) => {
      return res.status(200).send(data);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

// patch = update
app.patch(`/plants/:plant`, (req, res) => {
  let plantId = req.params.plant;
  let update = req.body;
  updatePlant(plantId, update, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(data);
  });
});

// delete = destroy
app.delete(`/plants/:plant`, (req, res) => {
  let plantId = req.params.plant;

  destroyPlant(plantId, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(data);
  });
});

// User routes

app.get('/users/:userId', (req, res) => {

});


app.post('/users', (req, res) => {
  let params = req.body;
  createUser(params)
    .then((user) => {
      return res.status(200).send(user);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
