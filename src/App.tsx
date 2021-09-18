import React, {useState} from 'react';
import './App.css';
import {Title} from "./Components/Title";
import OnOff from "./Components/OnOff";
import {UncontrolledAccordion} from "./Components/SelfControlledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./Components/Rating/Rating";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className="App">
            <Title title={'OnePageApplication'}/>
            <div style={{marginTop : "10px"}}>
                <OnOff/>
                <OnOff/>
            </div>

            <UncontrolledAccordion
                titleAccordion={'Algo'}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

export default App;
