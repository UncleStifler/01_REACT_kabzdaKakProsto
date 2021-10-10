import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

export type ItemType = {
    id: string
    userName: string,
}

type AccordionType = {

    titleAccordion: string
    accordionCollapsed: boolean
    onChange: () => void
    items: ItemType[]
    accordionOnClick: (value: any) => void
}


export const Accordion = (props: AccordionType) => {
    return <>
        <AccordionTitle
            accordionCollapsed={props.accordionCollapsed}
            onChange={props.onChange}
            titleAccordion={props.titleAccordion}/>
        {!props.accordionCollapsed && <AccordionBody
            accordionOnClick={props.accordionOnClick}
            items={props.items}
        />}
    </>

}