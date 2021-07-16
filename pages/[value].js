import {useState} from "react"
import {useRouter} from "next/router"

import {footer, meta, options} from "../config"
import {decodeURL, generateURL} from "../utils/urlUtils"
import Footer from "../components/Footer/Footer";
import DataViewer from "../components/DataViewer";
import Editor from "../components/Editor";
import WelcomeComponent from "../components/WelcomeComponent";
import MainHOC from "../hoc/MainHOC";
import BasicHeader from "../hoc/BasicHeader";
import ClipboardButton from "../components/ClipboardButton";
import BasicWrapper from "../hoc/BasicWrapper";
import ButtonWrapper from "../hoc/ButtonWrapper";

export default function Page() {
    const [origin, setOrigin] = useState("")
    if (typeof window !== 'undefined' && !origin) {
        setOrigin(window.location.origin)
    }

    const router = useRouter()
    let value = decodeURL(router.query.value)
    const [editor, setEditor] = useState(null)
    const [viewOnly, setViewOnly] = useState(true)

    const onChange = (editor, data, value) => {
        const encoded = generateURL(value)
        console.log(encoded)
    }

    return (
        <BasicWrapper>
            <BasicHeader {...meta}/>
            <MainHOC>
                <WelcomeComponent/>
                {viewOnly ? <DataViewer value={value}/>
                    :
                    <Editor editorDidMount={setEditor}
                            value={value}
                            options={options}
                            onBeforeChange={(e) => value = e}
                            onChange={onChange}/>}

                <ButtonWrapper>
                    <button
                        type="button"
                        className="relative inline-flex items-center mx-1 my-1 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setViewOnly(!viewOnly)}
                    >
                        {viewOnly ? "Open Editor" : "Close Editor"}
                    </button>

                    <a onClick={() => alert("URL copied to clipboard")}>
                        <ClipboardButton text="Generate URL (with editor)"
                                         clipboardData={`${origin}/${generateURL(value)}`}/>
                        <ClipboardButton text="Generate URL (read-only)"
                                         clipboardData={`${origin}/${generateURL(value)}/md`}/>
                    </a>
                </ButtonWrapper>
            </MainHOC>
            <Footer {...footer}/>
        </BasicWrapper>
    )
}
