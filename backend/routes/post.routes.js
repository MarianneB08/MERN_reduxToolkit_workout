const express = require("express");
const {
  createPost,
  getPosts,
  editPost,
  deletePost,
  likePost,
  dislikePost,
} = require("../controllers/post.controller");
const router = express.Router();

// Route pour la lecture des posts
router.get("/", getPosts);
// Route pour la création d'un nouveau post
router.post("/", createPost);
// Route pour la modification d'un post
router.put("/:id", editPost);
// Route pour la suppression d'un post
router.delete("/:id", deletePost);

// Route pour l'ajout d'un like sur un post
router.patch("/like-post/:id", likePost);
// Router pour la suppression d'un like sur un post 
router.patch("/dislike-post/:id", dislikePost);

module.exports = router;
