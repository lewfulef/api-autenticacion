const express = require('express'),
router = express.Router(),
{
    createPost,
    getPosts,
    updatePost,
    deletePost
} = require('../controllers/Post.controller')

router.post('/', createPost)
router.get('/', getPosts)
router.put('/', updatePost)
router.delete('/', deletePost)

module.exports = router