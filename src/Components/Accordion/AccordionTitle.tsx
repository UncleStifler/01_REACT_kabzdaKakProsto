import React from 'react';

type AccordionTitleType = {
    titleAccordion: string
}

const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <h3>{props.titleAccordion}</h3>
    );
};

export default AccordionTitle;