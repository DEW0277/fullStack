const express = require("express");
const mongoose = require("mongoose");
const postModel = require("./models/post.model");

const app = express();

app.use(express.json());

const PORT = 8090;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/post", (req, res) => {
  res.json({ massage: "Hello Json" });
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

const DATABASE_URL =
  "mongodb+srv://Jaloliddin:yK7tlxWVYXGYNxVQ@backend.lct9u.mongodb.net/?retryWrites=true&w=majority&appName=backend";

const connected = async () => {
  try {
    await mongoose
      .connect(DATABASE_URL)
      .then(() => console.log("DataBase Connected"));

    app.listen(PORT, () =>
      console.log(`Listening to -- http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log("Error Connected DataBase");
  }
};

connected();
