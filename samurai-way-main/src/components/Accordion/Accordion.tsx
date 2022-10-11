import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsedMenu: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log("Rendering Accordion")
    if(props.collapsedMenu === true){
        return (
            <>
                <AccordionTitle title = {props.titleValue}/>
                <AccordionBody/>
            </>
        )
    } else {
        return (
            <>
                <AccordionTitle title = {props.titleValue}/>
            </>
        )
    }


}

type AccordionPropsTitle = {
    title: string
}

function AccordionTitle(props: AccordionPropsTitle) {
    console.log("Rendering AccordionTitle")
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log("Rendering AccordionBody")

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>

}