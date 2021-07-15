const {generateURL} = require("./utils/urlUtils")
const {initialText} = require("./config").base
module.exports = {
    async redirects() {
        return [
            {
                source: "/",
                destination: `/${generateURL(initialText)}`,
                permanent: false,
            },
            {
                source: "/md",
                destination: `/`,
                permanent: false,
            },
        ]
    },
}
