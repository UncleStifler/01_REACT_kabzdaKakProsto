import React from 'react';

type ControlledOnOffType = {
    on: boolean
    onChange: () => void
    title: string
}


const ControlledOnOff = (props: ControlledOnOffType) => {

    const {on, onChange, title} = props

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
        color: on ? "white" : "black"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "white" : "red",
        color: on ? "black" : "white"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    }


    const clickForChange = () => onChange()

    return (
        <div>
            <h4>{title}</h4>
            <div style={onStyle} onClick={clickForChange}>ON</div>
            <div style={offStyle} onClick={clickForChange}>OFF</div>
            <div style={indicatorStyle}/>
        </div>
    );
};

export default ControlledOnOff;