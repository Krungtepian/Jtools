const mongoose = require('mongoose')
const { connect } = require('mongoose')

if(!mongoose.models.blogs) require('./blogs')
if(!mongoose.models.users) require('./users')


module.exports.connectDb = function() {
  if(!process.env.MONGO_URI) {
    throw new Error("MONGO_URI not specified in .env.local")
  }
  if(global.db) {
    return global.db
  } else {
    global.db = connect(process.env.MONGO_URI)
    return global.db
  }
}