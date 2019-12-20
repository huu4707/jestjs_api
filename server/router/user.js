const { Router } = require('express')
const { create } = require('../service/user')
const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send({status: true, data: [], message: "success"})
})

userRouter.post('/signup', (req, res) => {
    let body = req.body;
    create(body)
    .then(data => {
        res.send({status: true, data: data, message: "success"})
    })
    .catch(error => {
        res.send({status: false, data: [], message: error.message})
    })
})

module.exports = {
    userRouter
}