const express = require("express");
const router = express.Router();
const Post = require("../../models/Posts");

//posting a post
router.post("/", async (req, res) => {
  try {
    const newPost = new Post({
      name: req.body.name,
      Symbol: req.body.symbol,
      market_cap: req.body.market_cap,
    });
    let checkpost = await Post.find({ name: req.body.name });
    console.log(checkpost);
    if (checkpost.length > 0) {
      return res.send("post already added");
    }
    const post = await newPost.save();
    return res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.get("/all", async (req, res) => {
  try {
    const post = await Post.find();
    return res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

//get  post  by id
router.get("/view/:name", async (req, res) => {
  try {
    const post = await Post.find({ name: req.params.name });
    return res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});
//delete a post a by post id
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    await post.remove();
    return res.json({ msg: "post removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
