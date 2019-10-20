const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const todoRoutes = require('./routes/todos');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const server = express();

server.set('views', './views');
server.set('view engine', 'pug');

server.use(
  express.urlencoded({
    extended: true
  })
);
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.json());
server.use(todoRoutes);
// server.use(bodyParser.urlencoded({ extended: true }));
// server.use(bodyParser.json());

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://adel:1q2w3e4r@cluster0-mpyfv.mongodb.net/todos?retryWrites=true&w=majority',
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
    console.log('#-#-#-#-#-#-#', e);
  }
}

// server.post('/create', function(req, res, next) {
//   console.log('&&&&&&&&&&', req.body);
//   res.json(req.body);
// });

start();
