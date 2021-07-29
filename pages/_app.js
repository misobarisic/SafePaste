// import "tailwindcss/tailwind.css"
import "../styles/global.css"

import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import {useEffect} from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log(`You're using SafePaste version: ${require("../config").meta.version}`)
  }, [])
  return <Component {...pageProps} />
}
