const Post = require('../models/Post.model')

const createPost = async (req, res) => {
    try {
        const post = new Post(req.body)
        const resp = await post.save()
        return res.json({
            message: 'Post was created successfully',
            detail: resp
        })
    } catch (err) {
        return res.json({
            message: 'Error',
            detail: err.message
        })
    }
}

const getPosts = async (req, res) => {
    try {
        const resp = await Post.find()
                .populate('category')
                .populate('user')
        return res.json({
            message: 'Posts',
            detail: resp
        })
    } catch (err) {
        return res.json({
            message: 'Error',
            detail: err.message
        })
    }
}

const updatePost = async (req, res) => {
    try {
        const newData = req.body

        const resp = await Post.findByIdAndUpdate(
            newData._id,
            { $set: newData },
            { new: true })

        return res.json({
            message: 'Post updated successfully',
            detail: resp
        })
    } catch (err) {
        return res.json({
            message: 'Error',
            detail: err
        })
    }
}

const deletePost = async (req, res) => {
    try {
        const resp = await Post.findByIdAndDelete(req.body._id)

        return res.json({
            message: 'Post deleted successfully',
            detail: resp
        })
    } catch (err) {
        return res.json({
            message: 'Error',
            detail: err
        })
    }
}


module.exports = {
    createPost,
    getPosts,
    updatePost,
    deletePost
}