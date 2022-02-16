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

router
  .route('/:productId')
  .delete(auth, async (req, res) => {
    try {
      const { productId } = req.params
      const removedProduct = await Product.findById(
        productId
      )

      if (removedProduct._id.toString() === productId) {
        await removedProduct.remove()
        return res.send(null)
      } else {
        res.status(401).json({ message: 'Unauthorized' })
      }
    } catch (e) {
      res
        .status(500)
        .json({ message: 'Server error. Try again later.' })
    }
  })
  .patch(auth, async (req, res) => {
    try {
      const { productId } = req.params

      if (productId === req.body._id) {
        const updatedProduct =
          await Product.findByIdAndUpdate(
            productId,
            req.body,
            { new: true }
          )
        res.send(updatedProduct)
      } else {
        res.status(401).json({ message: 'Unauthorized' })
      }
    } catch (e) {
      res
        .status(500)
        .json({ message: 'Server error. Try again later.' })
    }
  })

module.exports = router
