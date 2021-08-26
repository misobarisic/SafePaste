export default function handler(req, res) {
    const {checkAcceptHeader,checkContentType} = require("../../utils/apiUtils")
    if (req.method === 'GET') {
        if (checkAcceptHeader(req, res)) return
        if (checkContentType(req, res)) return

        const {generateURL, generateURLwithPass} = require("../../utils/urlUtils")
        const {data, pass} = req.body
        const link = pass ? generateURLwithPass(data, pass) : generateURL(data)
        if (data) {
            res.status(200).json({data, link})
        } else {
            res.status(400).send(`Make sure to use x-www-form-urlencoded with key "data".`)
        }
    } else {
        res.status(405).send(`${req.method} not allowed. Please use GET.`)
    }
}

