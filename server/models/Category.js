const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    fullName: {
      type: String,
      required: true
    },
    companyId: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('Category', schema)
