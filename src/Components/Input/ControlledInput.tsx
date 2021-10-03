import React, {ChangeEvent, useRef, useState} from 'react';

export type controlledInput = {
    textInput: string
    inputStateChange: (textFromInput : string) => void
}



const ControlledInput = (props: controlledInput) => {
    const [text, setText] = useState('')

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.inputStateChange(e.currentTarget.value)
    }

    // const changeTextInput = (e: ChangeEvent<HTMLInputElement>)=> {
    //     saveText(e.currentTarget.value)
    // }
    //
    const inputRef = useRef<HTMLInputElement>(null)
    const saveText = () => {
        const el = inputRef.current as HTMLInputElement
        setText(el.value)
    }

    return (
        <div>
            <h4>Controlled Input</h4>
            <input
                type="text"
                value={props.textInput}
                onChange={inputChangeHandler}
            />
            <h4>Сhange with the button</h4>
            <input ref={inputRef}/>
            <button onClick={saveText}>save</button> - actual value: {text}
        </div>

    );
};

export default ControlledInput;