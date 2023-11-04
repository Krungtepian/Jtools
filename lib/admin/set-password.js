const prompt = require('prompt-sync')()
const { hashSync } = require('bcryptjs')
const User = require('../mongo/users')
const { exit } = require('process')
require('dotenv').config({
  path: './.env.local'
})

if(!process.env.MONGO_URI) {
  throw new Error('MONGO_URI not specified in .env.local on the root of the project')
} else {
  console.log(process.env.MONGO_URI)
  console.log('Please wait, connecting to Database')
  require('../mongo').connectDb().then((db) => {
    const newPassword = hashSync(prompt('Set admin password: '))
    console.log(newPassword)
    User.findOneAndUpdate({
      user: 'admin'
    },{
      password: newPassword
    },
    {
      upsert: true
    }).then(() => {
      exit(0)
    })
  })
}
