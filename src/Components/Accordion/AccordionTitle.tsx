import React from 'react';

type AccordionTitleType = {
    titleAccordion: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
}


const AccordionTitle = (props: AccordionTitleType) => {

    const collapseHandler = () => {
        props.setAccordionCollapsed(!props.accordionCollapsed)
    }

    return (
        <button
            style={{marginTop: "10px"}}
            onClick={collapseHandler}>
            {props.titleAccordion}
        </button>
    );
};

export default AccordionTitle;