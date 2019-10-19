const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');

const server = express();

server.use(todoRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://adel:1q2w3e4r@cluster0-mpyfv.mongodb.net/todos',
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
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

// server.get('/', (req, resp) => {
//   resp.render('index');
// });

start();
