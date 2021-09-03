import ReactMarkdown from "react-markdown";

export default function DataViewer({value}) {
    let alignment = "center"

    if (value.startsWith("--left")) {
        alignment = "left"
        value = value.slice("--left".length)
    } else if (value.startsWith("--right")) {
        alignment = "right"
        value = value.slice("--right".length)
    }

    return <div className={`text-${alignment} mx-4 md:mx-32`}>
        <ReactMarkdown children={value}/>
    </div>
}
