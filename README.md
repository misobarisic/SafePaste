<h1 align="center">Welcome to SafePaste 👋</h1>
<p>
  <a href="https://github.com/misobarisic/SafePaste/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

[SafePaste](https://misobarisic.com/go/safepaste) is an open-source service similar to Pastebin where you are able to store any piece of text and generate links for easy cross platform sharing.

What makes SafePaste stand out is its lack of a **database**. It is 100% frontend (client side).

### Advantages:

- Your links **cannot be deleted**
- Your links **cannot be censored**
- The server hosting SafePaste (including any fork using the same encode process) have **no access** to your data
- Your data will be accessible **forever** (as long as you have the link)
- Data is decoded on your device
- [AES256](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) + [Base64](https://en.wikipedia.org/wiki/Base64)
  encoding

### Markdown support

The only currently supported markdown use case is `[title](link)`.

## How it works

When you click on "Generate URL", SafePaste generates a link based on your input: `paste.misobarisic.com/<your data>`

When you open a link, SafePaste reads and decodes whatever comes after the first `/` upon which the appropriate data is
displayed in the editor.


## HTTP REST

SafePaste links can be easily created or read with a HTTP GET request:

Make sure to use `x-www-form-urlencoded` to pass data.

The accept header should include `application/json` or `*/*`.

### Encode
```javascript
GET /api/encode
Parameter: data

Example response: 
{
    "data": "this is an example",
    "link": "dGhpcyBpcyBhbiBleGFtcGxl"
} 
```

### Decode

```javascript
GET / api / decode
Parameter: link

Example
response:
{
    "data"
:
    "another example",
        "link"
:
    "YW5vdGhlciBleGFtcGxl"
}
```

## Forks

If you wish for all SafePaste links to be accessible on your fork of this project make sure not to edit these fields

`config.js`

``` javascript
module.exports.base = {
    key: "safepaste"
}
```

`utils/urlUtils.js`

```javascript
module.exports.generateURL = input => base64.encode(aes256.encrypt(key, input))
module.exports.decodeURL = input => aes256.decrypt(key, base64.decode(input))
```

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/misobarisic/safepaste/)

## Author

👤 **Mišo Barišić**

* Website: https://www.misobarisic.com
* GitHub: [@misobarisic](https://github.com/misobarisic)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [misobarisic](https://github.com/misobarisic).<br />
This project is [MIT](https://github.com/misobarisic/SafePaste/blob/main/LICENSE) licensed.
