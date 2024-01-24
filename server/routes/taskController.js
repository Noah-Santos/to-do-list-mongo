const express = require("express");
const router = express.Router();
const {readAllPosts, createPost, readOnePost, updatePost, deletePost} = require("../controllers/task");

router.get("/", readAllPosts);
router.post("/", createPost);
router.get("/:id", readOnePost)
router.put("/:oldId", updatePost);
router.delete("/:id", deletePost);

module.exports = router;