import React, {useState} from 'react';
import './App.css';
import {Title} from "./Components/Title";
import UncontrolledOnOff from "./Components/OnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {Accordion, ItemType} from "./Components/Accordion/Accordion";
import ControlledOnOff from "./Components/OnOff/ControlledOnOff";
import UncontrolledInput from "./Components/Input/UncontrolledInput";
import ControlledInput from "./Components/Input/ControlledInput";
import ControlledCheckBox from "./Components/CheckBox/ControlledCheckBox";
import ControlledSelect from "./Components/Select/ControlledSelect";
import {v1} from "uuid";
import SelectInput from "./Components/Select/SelectInput";


function App() {

    const items= [
        {id: v1(), userName: "Alexey"},
        {id: v1(), userName: "Dimych"},
        {id: v1(), userName: "Maxim"},
        {id: v1(), userName: "Oleg"},
    ]

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(true)
    const [textInput, setTextInput] = useState('')


    console.log(textInput)

    const forCollapsedAccordion = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    const onOffControlledHandler = () => {
        setOn(!on)
    }

    const inputStateChange = (textFromInput: string) => {
        setTextInput(textFromInput)
    }


    const accordionOnClick = (id: string) => {
        console.log(`some item was clicked ${id}`)
    }

    return (
        <div className="App">
            <Title title={'OnePageApplication'}/>
            <Accordion
                titleAccordion={"Controlled Accordion"}
                accordionCollapsed={accordionCollapsed}
                onChange={forCollapsedAccordion}
                items={items}
                accordionOnClick={accordionOnClick}
            />
            <UncontrolledAccordion
                titleAccordion={'Uncontrolled Accordion'}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <div>
                <ControlledOnOff
                    on={on}
                    title={"Controlled onOff"}
                    onChange={onOffControlledHandler}/>

            </div>
            <div style={{marginTop: "10px"}}>
                <UncontrolledOnOff
                    title={"Uncontrolled onOff"}
                    onInformation={setOn}/> {on.toString()}
            </div>
            <UncontrolledInput/>
            <ControlledInput
                textInput={textInput}
                inputStateChange={inputStateChange}/>
            <ControlledCheckBox/>
            <ControlledSelect/>
            <SelectInput
                items={items}
                value={'123'}
            />
        </div>
    );
}

export default App;
