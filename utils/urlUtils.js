const base64 = require("base-64")
module.exports.generateURL = input => base64.encode(input)
module.exports.decodeURL = input => base64.decode(input)
