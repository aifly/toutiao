
const crypto = require('crypto')

var secret = 'xuchang'

const hash = crypto.createHmac('sha256',secret).update('I love').digest('hex')

console.log(hash)
