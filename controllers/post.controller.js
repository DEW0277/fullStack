const postModel = require('../models/post.model');

class PostController {
  async getAll(req, res) {
    try {
      const allPosts = await postModel.find();

      res.status(201).json(allPosts);
    } catch (error) {
      console.log(`Error postController with -- ${error}`);
      res.status(500).json(error);
    }
  }

  async create(req, res) {
    try {
      const { title, body } = req.body;

      const newPost = await postModel.create({ title, body });

      res.status(200).json(newPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new PostController();
