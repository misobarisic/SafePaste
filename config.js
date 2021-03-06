module.exports.meta = {
    title: "SafePaste",
    icon: "/favicon.ico",
    version: "0.1.1",
}
module.exports.options = {
    lineNumbers: true,
    readOnly: false,
    lineWrapping: true,
    smartIndent: false,
    indentUnit: 0,
    electricChars: false,
    showCursorWhenSelecting: true,
}
module.exports.footer = {
    links: [
        {
            text: "Developer",
            link: "https://misobarisic.com/"
        },
        {
            text: "Source Code",
            link: "https://misobarisic.com/go/safepastesource",
        },
        {
            text: "SafeLink",
            link: "https://misobarisic.com/go/safelink",
        }
    ]
}
module.exports.base = {
    initialText: `SafePaste relies on the URL to read data.
Yes, that's correct. 
Everything you paste can be represented as a set of characters in the URL.
That way everything is permanent and nothing can be deleted.
Data is encoded using AES256 and Base64. 


[Info](https://misobarisic.com/go/safepastesource)`,
    key: "safepaste",
    passphrase: "!safepassword"
}
