import React, {useReducer} from 'react';
import SelfControlledAccordionBody from "./SelfControlledAccordionBody";
import UncontrolledAccordionTitle from "./UncontrolledAccordionTitle";
import {reducer} from "./Reducer";

type AccordionType = {
    titleAccordion: string
}

export const UncontrolledAccordion = (props: AccordionType) => {


    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>

            <UncontrolledAccordionTitle
                titleAccordion={props.titleAccordion}
                onClick={() => {
                    dispatch({type: 'TOGGLE-COLLAPSED'})
                }}/>
            {state.collapsed && <SelfControlledAccordionBody/>}
        </div>
    )
}