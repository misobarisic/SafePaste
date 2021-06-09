import ReactMarkdown from "react-markdown";

export default function DataViewer({value}) {
    return <div className="mx-4 md:mx-32">
        <ReactMarkdown children={value}/>
    </div>
}
