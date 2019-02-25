const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const app = express();

const PORT = 3000;

app.use(morgan('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
