const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

async function start() {
  try {
    await mongoose.connect('', {
      useNewUrlParser: true,
      useFindAndModify: false
    });
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT} `);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
