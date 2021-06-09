module.exports.checkAcceptHeader = (req,res,wantedHeader="application/json") => {
    const acceptHeader = req.headers.accept || ""
    if (!acceptHeader.includes(wantedHeader) && !acceptHeader.includes("*/*")) {
        return res.status(400).send(`Accept headers are missing ${wantedHeader} or */*.`)
    }
}
module.exports.checkContentType = (req,res,wantedHeader = "application/x-www-form-urlencoded") => {
    const acceptHeader = req.headers["content-type"] || ""
    if (!acceptHeader.includes(wantedHeader) && !acceptHeader.includes("*/*")) {
        return res.status(400).send(`Content-type should be ${wantedHeader} or */*.`)
    }
}
