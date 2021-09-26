import React from 'react';

type AccordionTitleType = {
    titleAccordion: string
    accordionCollapsed: boolean
    onChange: () => void
}


const AccordionTitle = (props: AccordionTitleType) => {

    const collapseHandler = () => {
        props.onChange()
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