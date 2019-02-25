const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { createPlant,
  readPlant,
  updatePlant,
  destroyPlant,
  createPostByPlant,
  readPostByPlant,
  updatePostByPlant,
  destroyPostByPlant
} = require('../database');

const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../client/dist'));

// get = read
app.get(`/plants/:plant`, (req, res) => {
  let plantId = req.params.plant;
  readPlant(plantId, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(data);
  });
});

// post = create
app.post(`/plants/:plant`, (req, res) => {
  let params = req.params.plant;
  createPlant(params, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(data);
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

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
