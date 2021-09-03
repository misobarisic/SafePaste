import React from "react";

export default function Button({text,link}) {
    return  <a
        className="flex items-center justify-center text-black hover:text-blue-600 mx-1"
        href={link || "/"}
        target="_blank"
        rel="noopener noreferrer"
    >
        {text || "Button"}
    </a>
}
