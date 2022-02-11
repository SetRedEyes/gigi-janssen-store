const express = require('express')
const auth = require('../middleware/auth.middleware')
const User = require('../models/User')
const router = express.Router({ mergeParams: true })

router.patch('/:userId', auth, async (req, res) => {
  try {
    const { userId } = req.params

    if (userId === req.user._id) {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        req.body,
        { new: true }
      )
      res.send(updatedUser)
    } else {
      res.status(401).json({ message: 'Unauthorized' })
    }
  } catch (e) {
    res
      .status(500)
      .json({ message: 'Server error. Try again later.' })
  }
})

router.get('/:userId', auth, async (req, res) => {
  try {
    const { userId } = req.params
    const currentUser = await User.findById(userId)
    res.send(currentUser)
  } catch (e) {
    res
      .status(500)
      .json({ message: 'Server error. Try again later.' })
  }
})
module.exports = router
