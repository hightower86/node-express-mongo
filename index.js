const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const todoRoutes = require('./routes/todos.js');

const PORT = process.env.PORT || 3000;

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine); // registration engine by key 'hbs'
app.set('view engine', 'hbs'); // using handle-bars defoult
app.set('views', 'views'); // folder for views

app.use(todoRoutes);

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
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT} `);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
