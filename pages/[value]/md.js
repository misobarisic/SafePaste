import {useRouter} from "next/router"

import {footer, meta} from "../../config"
import {decodeURL, generateURL} from "../../utils/urlUtils"
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

    const value = decodeURL(router.query.value)

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
