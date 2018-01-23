const express = require('express');
const mongoose = require('mongoose');
//const bodyparser = require('body-parser')
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Product route works'
    })

})

router.post('/', (req, res, next)=>{
    const name = req.body.name;
    res.status(201).json({
        message: 'Product POST route works',
        name: name
    })

})

module.exports = router;