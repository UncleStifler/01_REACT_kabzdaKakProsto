import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type AccordionType = {
    titleAccordion: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
}


export const Accordion = (props: AccordionType) => {
    return <>
        <AccordionTitle
            accordionCollapsed={props.accordionCollapsed}
            setAccordionCollapsed={props.setAccordionCollapsed}
            titleAccordion={props.titleAccordion}/>
        {!props.accordionCollapsed && <AccordionBody/>}
    </>

}