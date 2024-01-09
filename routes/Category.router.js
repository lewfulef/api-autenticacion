const express = require('express'),
router = express.Router(),
{
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
} = require('../controllers/Category.controller')
const auth = require('../middlewares/auth')

router.post('/', auth, createCategory)
router.get('/', auth, getCategories)
router.put('/', auth, updateCategory)
router.delete('/', auth, deleteCategory)

module.exports = router