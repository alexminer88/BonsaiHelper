// const sys = require('sys')
// const exec = require('child_process').exec;

const mongoose = require('mongoose');
const faker = require('faker');
const fs = require('fs');

mongoose.connect('mongodb://localhost/bonsaihelper');

const db = mongoose.connection;


let users = [];
for (let i = 0; i < 1; i++) {
  let plants = [];
  let name = faker.name.findName();
  for (let j = 0; j < 3; j++) {
    plants.push({
      name: faker.commerce.productName(),
      author: name,
      plantType: faker.commerce.productMaterial(),
      dateCreated: faker.date.recent(),
      dateLastEdit: faker.date.recent(),
      posts: [],
    });
  }
  let user = {
    name: name,
    avatarImg: faker.image.avatar(),
    plants: plants,
  }
  users.push(user);
}

User.collections.bulkWrite(users);


// to connect to mongod, must provide username and password, also must posses the readWrite role
// -d (database) bonsaihelper
// --type json

// `mongodb://[username:password@]host1[:port1][/[database][?options]]`

// let command = `mongoimport -d bonsaihelper --collections user`
// let child;
// // executes `pwd`
// child = exec("pwd", function (error, stdout, stderr) {
//   sys.print('stdout: ' + stdout);
//   sys.print('stderr: ' + stderr);
//   if (error !== null) {
//     console.log('exec error: ' + error);
//   }
// });