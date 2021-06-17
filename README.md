# What is SafePaste?

[SafePaste](https://misobarisic.com/go/safepaste) is an open-source service similar to Pastebin where you are able to store any piece of text and generate links for easy cross platform sharing.

What makes SafePaste stand out is its lack of a **database**. It is 100% frontend (client side).

### Advantages:

- Your links **cannot be deleted**
- Your links **cannot be censored**
- The server hosting SafePaste (including any fork using the same encode process) have **no access** to your data
- Your data will be accessible **forever** (as long as you have the link)
- Data is decoded on your device

### Markdown support

The only currently supported markdown use case is `[title](link)`.

## How it works

When you click on "Generate URL", SafePaste stores your data  using [base64](https://en.wikipedia.org/wiki/Base64) generates a link: `safepaste.misobarisic.com/<your data>`

When you open a link, SafePaste reads and decodes whatever is after the first `/` after which the appropriate data is displayed in the editor.


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
GET /api/decode
Parameter: link

Example response:
{
    "data": "another example",
    "link": "YW5vdGhlciBleGFtcGxl"
}
```

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/misobarisic/safepaste/)
