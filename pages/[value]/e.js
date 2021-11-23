import {useEffect, useState} from "react"
import {useRouter} from "next/router"

import {footer, meta, options} from "../../config"
import {decodeURL, generateURL} from "../../utils/urlUtils"
import Footer from "../../components/Footer/Footer";
import Editor from "../../components/Editor";
import WelcomeComponent from "../../components/WelcomeComponent";
import MainHOC from "../../hoc/MainHOC";
import BasicHeader from "../../hoc/BasicHeader";
import ClipboardButton from "../../components/ClipboardButton";
import BasicWrapper from "../../hoc/BasicWrapper";
import ButtonWrapper from "../../hoc/ButtonWrapper";

export default function Page() {
    const [origin, setOrigin] = useState("")
    if (typeof window !== 'undefined' && !origin) {
        setOrigin(window.location.origin)
    }

    const router = useRouter()
    const [value, setValue] = useState(decodeURL(router.query.value))
    useEffect(() => {
        if (router.query.value) setValue(decodeURL(router.query.value) || "Something went wrong")
    }, [router.query.value])

    const [editor, setEditor] = useState(null)
    const [viewOnly, setViewOnly] = useState(false)
    const [editorOnly, setEditorOnly] = useState(true)

    const onChange = (editor, data, value) => {
        const encoded = generateURL(value)
        console.log(encoded)
    }

    return (
        <BasicWrapper>
            <BasicHeader {...meta}/>
            <MainHOC>
                <WelcomeComponent/>
                <Editor editorDidMount={setEditor}
                        value={value}
                        options={options}
                        onBeforeChange={setValue}
                        onChange={onChange}/>
                <ButtonWrapper>
                    <a onClick={() => alert("URL copied to clipboard")}>
                        <ClipboardButton text="Generate URL"
                                         clipboardData={`${origin}/${generateURL(value)}/e`}/>
                    </a>
                </ButtonWrapper>
            </MainHOC>
            <Footer {...footer}/>
        </BasicWrapper>
    )
}
