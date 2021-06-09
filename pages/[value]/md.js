import Head from "next/head"
import {useEffect, useState} from "react"
import {useRouter} from "next/router"

import Clipboard from 'react-clipboard.js'
import ReactMarkdown from "react-markdown"

import {meta,footer} from "../../config"
import {generateURL,decodeURL} from "../../utils/urlUtils"
import Footer from "../../components/Footer/Footer";
import DataViewer from "../../components/DataViewer";
import WelcomeComponent from "../../components/WelcomeComponent";
import Main from "../../hoc/MainHOC";
import BasicHeader from "../../hoc/BasicHeader";
import ClipboardButton from "../../components/ClipboardButton";
import BasicWrapper from "../../hoc/BasicWrapper";
import ButtonWrapper from "../../hoc/ButtonWrapper";

export default function Page() {
    const router = useRouter()

    if (!router.query.value) return <></>

    const value = decodeURL(router.query.value) || "No data"

    return (
        <BasicWrapper>
            <BasicHeader {...meta}/>
            <Main>
                <WelcomeComponent/>
                <DataViewer value={value}/>
                <ButtonWrapper>
                    <a onClick={() => alert("URL copied to clipboard")}>
                        <ClipboardButton text="Copy URL to clipboard" clipboardData={`${window.location.origin}/${generateURL(value)}/md`}/>
                    </a>
                </ButtonWrapper>
            </Main>

            <Footer {...footer}/>
        </BasicWrapper>
    )
}
