import React from 'react';
import {RatingValueType} from "./Rating";

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}


const Star = (props: StarPropsType) => {

    const changeStarHandler = () => {
        props.onClick(props.value)
    }

    return (
        <span
            onClick={changeStarHandler}
        style={{marginRight: "5px"}}>
        {props.selected ? <b>star</b> : "star"}
        </span>
    )
};

export default Star;