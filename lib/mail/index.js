const { createTransport } = require('nodemailer')
const { validate } = require('email-validator')

const keys = ['M_HOST', 'M_PORT', 'M_USER', 'M_PW', 'SENDTO']

keys.forEach((v) => {
  if(!process.env[v]) {
    throw new Error(`${v} not specified in .env.local`)
  }
})

if(!validate(process.env.SENDTO)) {
  throw new Error('SENDTO email invalid')
}

if(!global.transporter) global.transporter = createTransport({
  host: process.env.M_HOST,
  port: parseInt(process.env.M_PORT),
  secure: false,
  auth: {
    user: process.env.M_USER,
    pass: process.env.M_PW
  }
});

module.exports.sendMail = async(name, email, message) => {
  return new Promise((resolve, reject) => {
    global.transporter.verify(function (error, success) {
      if (error) {
        console.log(error)
        reject('transport-error')
      } else {
        global.transporter.sendMail({
          from: email,
          to: process.env.SENDTO,
          replyTo: process.env.email,
          subject: name,
          text: message
        })
        resolve()
      }
    });
  })
}