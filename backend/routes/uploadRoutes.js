const express = require('express')
const {uploadImages, listImages} = require('../controllers/uploadcontroller')

const authUser = require('../middleware/auth')
const imageUpload = require('../middleware/imageUpload')

const router = express.Router()

router.post('/uploadImages',imageUpload, uploadImages)
router.get('/listImages', listImages)

module.exports = router