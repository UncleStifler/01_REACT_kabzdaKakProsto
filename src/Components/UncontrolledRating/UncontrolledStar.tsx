import React from 'react';

type StarPropsType = {
    selected: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}


const UncontrolledStar = (props: StarPropsType) => {
    return (
        <span onClick={ () => props.setValue(props.value)}>
        {props.selected ? <b>star </b> : "star "}
        </span>
    )
};

export default UncontrolledStar;