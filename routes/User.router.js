const express = require('express'),
router = express.Router(),
{
    signUp,
    logIn,
    getUsers,
    updateUser,
    deleteUser,
    login
} = require('../controllers/User.controller')
const auth = require('../middlewares/auth')

router.post('/signup', signUp)
router.post('/login', login)
router.get('/', auth, getUsers)
router.put('/', auth, updateUser)
router.delete('/', auth, deleteUser)

module.exports = router