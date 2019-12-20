const express = require('express');
const { userRouter } = require('./router/user')
const { json } = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(json())

app.use('/user', userRouter);
app.get('/', (req, res) => {
    res.send('hello');
})
module.exports = {app};