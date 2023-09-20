const { Schema, model } = require('mongoose')

const schema = new Schema({
  user: String,
  password: String
})

module.exports = model('users', schema)