const express = require('express')
const Company = require('../models/Company')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
  try {
    const list = await Company.find()
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'Iternal server error. Please try again'
    })
  }
})

module.exports = router
