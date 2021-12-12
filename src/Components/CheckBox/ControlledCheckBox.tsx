import React, {ChangeEvent, useState} from 'react';


const ControlledCheckBox = () => {
    const [checkBox, setCheckBox] = useState(true)

    const changeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckBox(e.currentTarget.checked)
    }

    return (
        <div>
            <input
                type="checkbox"
                onChange={changeCheckBoxHandler}
                checked={checkBox}/>
        </div>
    );
};

export default ControlledCheckBox;