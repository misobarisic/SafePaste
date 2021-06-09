export default function handler(req, res) {
    const {checkAcceptHeader,checkContentType} = require("../../utils/apiUtils")

    if (req.method === 'GET') {
        if (checkAcceptHeader(req,res)) return
        if (checkContentType(req,res)) return

        console.log(req.headers)

        const {generateURL} = require("../../utils/urlUtils")
        const data = req.body.data
        const link = generateURL(data)
        if (data) {
            res.status(200).json({data, link})
        } else {
            res.status(400).send(`Make sure to use x-www-form-urlencoded with key "data".`)
        }
    } else {
        res.status(405).send(`${req.method} not allowed. Please use GET.`)
    }
}

