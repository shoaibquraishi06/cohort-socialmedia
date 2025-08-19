const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const  userModel = require('../models/user.model');
const  authMiddleware = require ("../middlewares/auth.middleware")
const {createPostcontroller} = require("../controllers/post.controller")
const multer = require('multer')

const upload = multer({ storage: multer.memoryStorage() });





router.post('/',
  upload.single("image"),
  createPostcontroller
     )



module.exports = router;