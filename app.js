const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

// Routes
const postRouter = require('./routes/post.router');

const app = express();

app.use(express.json());

app.use('/api/post', postRouter);

const LOCAL_PORT = process.env.PORT || 8090;

const DATABASE_URL = process.env.DB_URL;

const connected = async () => {
  try {
    await mongoose
      .connect(DATABASE_URL)
      .then(() => console.log('DataBase Connected'));

    app.listen(LOCAL_PORT, () =>
      console.log(`Listening to -- http://localhost:${LOCAL_PORT}`)
    );
  } catch (error) {
    console.log(`Error Connected DataBase -- ${error}`);
  }
};

connected();
