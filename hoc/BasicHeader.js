import Head from "next/head";

export default function Header({title,icon}) {
    return <Head>
        <title>{title || "SafePaste"}</title>
        <link rel="icon" href={icon || "/favicon.ico"}/>
    </Head>
}

