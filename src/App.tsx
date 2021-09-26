import React, {useState} from 'react';
import './App.css';
import {Title} from "./Components/Title";
import UncontrolledOnOff from "./Components/OnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {Accordion} from "./Components/Accordion/Accordion";
import ControlledOnOff from "./Components/OnOff/ControlledOnOff";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(true)

    const forCollapsedAccordion = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    const onOffControlledHandler = () => {
        setOn(!on)
    }

    return (
        <div className="App">
            <Title title={'OnePageApplication'}/>
            <Accordion
                titleAccordion={"Controlled Accordion"}
                accordionCollapsed={accordionCollapsed}
                onChange={forCollapsedAccordion}
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
        </div>
    );
}

export default App;
