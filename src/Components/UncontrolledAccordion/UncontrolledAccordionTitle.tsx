import React from 'react';

type AccordionTitleType = {
    onClick: () => void
    titleAccordion: string
}

const UncontrolledAccordionTitle = (props: AccordionTitleType) => {

    const accordionHandler = () => {
        props.onClick()
    }

    return (
        <div style={{marginTop : "10px"}}>
            <button onClick={accordionHandler}>{props.titleAccordion}</button>
        </div>
    );
};

export default UncontrolledAccordionTitle;