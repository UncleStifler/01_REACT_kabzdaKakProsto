import React, {useState} from 'react';
import SelfControlledAccordionBody from "./SelfControlledAccordionBody";
import UncontrolledAccordionTitle from "./UncontrolledAccordionTitle";

type AccordionType = {
    titleAccordion: string
}


export const UncontrolledAccordion = (props: AccordionType) => {

    const [collapse, setCollapse] = useState(true)

    return (
        <div>
            <UncontrolledAccordionTitle
                titleAccordion={props.titleAccordion}
                onClick={() => {
                    setCollapse(!collapse)
                }}/>
            {collapse && <SelfControlledAccordionBody/>}
        </div>
    )
}