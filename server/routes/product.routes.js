const express = require('express')
const auth = require('../middleware/auth.middleware')
const Product = require('../models/Product')
const router = express.Router({ mergeParams: true })

router
  .route('/')
  .get(async (req, res) => {
    try {
      const list = await Product.find()
      res.status(200).send(list)
    } catch (e) {
      res.status(500).json({
        message: 'Iternal server error. Please try again'
      })
    }
  })
  .post(auth, async (req, res) => {
    console.log(req, res)
    try {
      const newProduct = await Product.create({
        ...req.body
      })

      res.status(201).send(newProduct)
    } catch (e) {
      res
        .status(500)
        .json({ message: 'Server error. Try again later.' })
    }
  })

module.exports = router
