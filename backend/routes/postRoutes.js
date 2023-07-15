const express = require('express')
const {createPost, getAllPost} = require('../controllers/postController')

const authUser = require('../middleware/auth')

const router = express.Router()

router.post('/createPost', authUser , createPost)
router.get('/getAllPost' ,authUser, getAllPost)

module.exports = router