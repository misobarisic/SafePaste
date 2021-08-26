const aes256 = require("aes256")
const base64 = require("base-64")
const {key, passphrase} = require("../config").base
module.exports.generateURL = input => input ? base64.encode(aes256.encrypt(key, input)) : ""
module.exports.generateURLwithPass = (input, pass) => base64.encode(aes256.encrypt(key, base64.encode(aes256.encrypt(pass, input)) + passphrase))
module.exports.decodeURL = (input, pass) => {
    if (input) {
        try {
            return aes256.decrypt(pass || key, base64.decode(input))
        } catch (e) {
            return ""
        }
    } else return ""
}
