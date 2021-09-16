import React, {useState} from 'react';


const OnOff = () => {
    const [state, setState] = useState(true)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: state ? "green" : "white",
        color: state ? "white" : "black"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: state? "white" : "red",
        color: state ? "black" : "white"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: state ? "green" : "red",
    }



    const clickOn = () => {
        setState(!state)
    }

    const clickOff = () => {
        setState(!state)
    }

    return (
        <div>
            <div style={onStyle} onClick={clickOn}>ON</div>
            <div style={offStyle} onClick={clickOff}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;