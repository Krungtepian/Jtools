const { connect } = require('mongoose')

module.exports.connectDb = function() {
  if(global.db) {
    return global.db
  } else {
    global.db = connect(process.env.MONGO_URI)
    return global.db
  }
}