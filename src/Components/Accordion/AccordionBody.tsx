import React from 'react';
import {ItemType} from "./Accordion";

type AccordionBodyType = {
    items: ItemType[]
    accordionOnClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyType) => {
    console.log("UncontrolledAccordionBody rendering")
    return (
        <ul>
            {
                props.items.map((t, index) => {

                    const accordionClickHandler = () => {
                        props.accordionOnClick(t.id)
                    }

                    return (
                        <li
                            onClick={accordionClickHandler}
                            key={index}>
                            {t.userName}
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default AccordionBody;