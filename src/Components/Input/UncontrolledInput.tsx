import React, {ChangeEvent, useState} from 'react';

const UncontrolledInput = () => {

    const [inputValue, setInputValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={onChangeHandler}/>
        </div>

    );
};

export default UncontrolledInput; 