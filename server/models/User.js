const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true
    },
    password: { type: String },
    phone: {
      type: String
    },
    city: {
      type: String
    },
    postOfficeNumber: {
      type: Number
    }
  },
  { timestamps: true }
)

module.exports = model('User', schema)
