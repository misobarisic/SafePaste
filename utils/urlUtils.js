const aes256 = require("aes256")
const base64 = require("base-64")
const {key} = require("../config").base
module.exports.generateURL = input => base64.encode(aes256.encrypt(key, input))
module.exports.decodeURL = input => aes256.decrypt(key, base64.decode(input))
