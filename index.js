const express = require('express');
const mongoose = require('mongoose');

const server = express();

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://adel:1q2w3e4r@cluster0-mpyfv.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: false
      }
    );
    server.listen(PORT, () => {
      console.log('server started');
    });
  } catch (e) {
    console.log(e);
  }
}

server.set('views', './views');
server.set('view engine', 'pug');

server.get('/', (req, resp) => {
  resp.render('index');
});

start();
