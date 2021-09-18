import React, {useState} from 'react';
import SelаControlledAccordionTitle from "./SelfControlledAccordionTitle";
import SelfControlledAccordionBody from "./SelfControlledAccordionBody";

type AccordionType = {
    titleAccordion: string
}


export const UncontrolledAccordion = (props: AccordionType) => {

    const [collapse, setCollapse] = useState(true)

    return (
        <div>
            <SelаControlledAccordionTitle
                titleAccordion={props.titleAccordion}
                onClick={() => {setCollapse(!collapse)}}/>
            {collapse && <SelfControlledAccordionBody/>}
        </div>
    )
}