import {Controlled as CodeMirror} from "react-codemirror2";

export default function Editor({setEditor,value,options,onBeforeChange,onChange}) {
    return <div className="text-left w-full max-w-4xl md:max-w-full">
        <CodeMirror
            editorDidMount={setEditor}
            value={value}
            options={options}
            onBeforeChange={(editor, data, value) => {
                onBeforeChange(value);
            }}
            onChange={onChange}
        />
    </div>
}
