const axios = require('axios');
const faker = require('faker');

axios({
  method: 'post',
  url: 'http://localhost:3000/plants/',
  data: {
    name: 'Natie Plum',
    author: '5c75b3c479c7ce15030c66b2',
    plantType: 'natal plum',
    // dateCreated: faker.date.recent(),
    // dateLastEdited: faker.date.recent(),
    // posts: [],
  },
})
  .then((res) => {
    // console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// axios({
//   method: 'post',
//   url: 'http://localhost:3000/users/',
//   data: {
//     name: 'Alex',
//     avatarImg: 'testimage',
//     // dateCreated: faker.date.recent(),
//     // dateLastEdited: faker.date.recent(),
//     // posts: [],
//   },
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// axios.get('http://localhost:3000/plants/1')
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });
