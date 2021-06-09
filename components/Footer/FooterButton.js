import React from "react";

export default function Button({text,link}) {
    return  <a
        className="flex items-center justify-center text-black mx-1"
        href={link || "/"}
        target="_blank"
        rel="noopener noreferrer"
    >
        {text || "Button"}
    </a>
}
