import Clipboard from "react-clipboard.js";

export default function Button({clipboardData, text}) {
    return <Clipboard component="a" button-href="#"
                      data-clipboard-text={clipboardData}>
        <button
            type="button"
            className="relative inline-flex items-center mx-1 my-1 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {text}
        </button>
    </Clipboard>
}
