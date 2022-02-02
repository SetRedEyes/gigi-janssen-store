const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    companyName: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    rusName: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    price: {
      type: Array,
      required: true
    },
    volume: {
      type: Array,
      required: true
    },
    photo: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('Product', schema)
