const express = require('express');

const authRouter = require("./routes/auth.routes")
const postRouter = require("./routes/post.route")
const cookiePaser = require('cookie-parser')
const cors = require('cors');
const { createPostcontroller } = require('./controllers/post.controller');

const app = express();
app.use(cors())


app.use(cookiePaser())
app.use(express.json());
// app.use('/', createPostcontroller)
// app.use('/api/auth', authRouter);
app.use('/', postRouter)



module.exports = app;