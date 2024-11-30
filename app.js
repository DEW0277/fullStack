const express = require("express");
const mongoose = require("mongoose");
const postModel = require("./models/post.model");
require("dotenv").config();

const app = express();

app.use(express.json());

const LOCAL_PORT = process.env.PORT;

app.get("/", async (req, res) => {
  const allPosts = await postModel.find();

  res.status(201).json(allPosts);
});

app.get("/post", (req, res) => {
  res.json({ massage: "Hello Jsdon" });
});

app.post("/", async (req, res) => {
  try {
    const { title, body } = req.body;

    const newPost = await postModel.create({ title, body });

    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

const DATABASE_URL = process.env.DB_URL;

const connected = async () => {
  try {
    await mongoose
      .connect(DATABASE_URL)
      .then(() => console.log("DataBase Connected"));

    app.listen(LOCAL_PORT, () =>
      console.log(`Listening to -- http://localhost:${LOCAL_PORT}`)
    );
  } catch (error) {
    console.log(`Error Connected DataBase -- ${error}`);
  }
};

connected();
