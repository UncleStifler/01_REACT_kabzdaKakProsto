import React, {useState} from 'react';
import './App.css';
import {Title} from "./Components/Title";
import OnOff from "./Components/OnOff/OnOff";
import {UncontrolledAccordion} from "./Components/SelfControlledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {Accordion} from "./Components/Accordion/Accordion";
import ControlledOnOff from "./Components/OnOff/ControlledOnOff";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(true)

    return (
        <div className="App">
            <Title title={'OnePageApplication'}/>
            <div style={{marginTop: "10px"}}>
                <OnOff/>
                <OnOff/>
            </div>
            <div>
                <ControlledOnOff
                on={on}
                setOn={setOn}/>
            </div>

            <UncontrolledAccordion
                titleAccordion={'Algo'}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion
                titleAccordion={"Menu"}
                accordionCollapsed={accordionCollapsed}
                setAccordionCollapsed={setAccordionCollapsed}
            />
        </div>
    );
}

export default App;
