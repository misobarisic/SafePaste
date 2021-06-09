import React from "react";
import FooterHOC from "../../hoc/FooterHOC";
import Button from "./FooterButton"

export default function Footer({links}) {
    return <FooterHOC>
            {links.map((btn, index) => <><Button key={index} {...btn}/>{index !== links.length - 1 && "|"}</>)}
    </FooterHOC>
}


