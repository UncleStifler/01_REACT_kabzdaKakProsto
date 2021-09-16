import React, {useState} from 'react';
import './App.css';
import {Rating} from "./Components/Rating/Rating";
import {Accordion} from "./Components/Accordion/Accordion";
import {Title} from "./Components/Title";
import OnOff from "./Components/OnOff";

function App() {


    return (
        <div className="App">
            {/*<input value='yo' type='password' checked={true}/>*/}
            <Title title={'OnePageApplication'}/>
            <Rating value={0}/>
            <Accordion
                titleAccordion={'Menu'}
                collapsed={false}/>
            <Rating value={2}/>
            <Accordion
                titleAccordion={'Users'}
                collapsed={false}/>
            <Rating value={4}/>
            <OnOff/>
        </div>
    );
}

export default App;
