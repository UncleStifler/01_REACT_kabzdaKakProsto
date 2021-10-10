import React, {useReducer, useState} from 'react';
import SelfControlledAccordionBody from "./SelfControlledAccordionBody";
import UncontrolledAccordionTitle from "./UncontrolledAccordionTitle";

type AccordionType = {
    titleAccordion: string
}

type ActionReducerType = {
    type: string
}

const reducer = (state: boolean, action: ActionReducerType) => {
    if (action.type === 'TOGGLE-COLLAPSED') {
        return !state
    }


    return state
}

export const UncontrolledAccordion = (props: AccordionType) => {

    // const [collapse, setCollapse] = useState(true)
    const [collapse, dispatch] = useReducer(reducer, true)

    return (
        <div>
            {/*<UncontrolledAccordionTitle*/}
            {/*    titleAccordion={props.titleAccordion}*/}
            {/*    onClick={() => {*/}
            {/*        setCollapse(!collapse)*/}
            {/*    }}/>*/}
            <UncontrolledAccordionTitle
                titleAccordion={props.titleAccordion}
                onClick={() => {
                    dispatch({type: 'TOGGLE-COLLAPSED'})
                }}/>
            {collapse && <SelfControlledAccordionBody/>}
        </div>
    )
}