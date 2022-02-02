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
_id: 'sIazImb0BaM34kEH3wgwyMPFuiy2'
city: 'Харьков'
email: 'denidraven@gmail.com'
firstName: 'Денис'
lastName: 'Cаберов'
phone: 'sdasd'
postOfficeNumber: '4444'
