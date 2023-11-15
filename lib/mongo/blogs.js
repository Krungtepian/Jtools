const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: String,
  description: String,
  coverImageUrl: String,
  content: String
})

module.exports = model('blogs', schema)