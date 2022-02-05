const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
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
      type: String
    }
  },
  { timestamps: true }
)

module.exports = model('User', schema)
