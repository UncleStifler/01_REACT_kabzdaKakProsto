import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type AccordionType = {
    titleAccordion: string
    collapsed: boolean
}


export const Accordion = (props: AccordionType) => {
        return <>
            <AccordionTitle
                titleAccordion={props.titleAccordion}/>
            { !props.collapsed && <AccordionBody/>}
        </>

}