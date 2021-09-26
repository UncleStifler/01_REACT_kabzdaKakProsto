import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type AccordionType = {
    titleAccordion: string
    accordionCollapsed: boolean
    onChange: () => void
}


export const Accordion = (props: AccordionType) => {
    return <>
        <AccordionTitle
            accordionCollapsed={props.accordionCollapsed}
            onChange={props.onChange}
            titleAccordion={props.titleAccordion}/>
        {!props.accordionCollapsed && <AccordionBody/>}
    </>

}