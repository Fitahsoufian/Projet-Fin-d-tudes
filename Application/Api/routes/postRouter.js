const express = require('express');
const router = express.Router();
const {createPost , findPost, updatePost, deletePost,PostById} = require("../controllers/postController");


router.post('/createPost', createPost);
router.get('/getPosts', findPost);
router.put('/updatePost/:id',updatePost);
router.delete('/deletePost/:id',deletePost);
router.get('/getPost/:id',PostById);




module.exports = router;