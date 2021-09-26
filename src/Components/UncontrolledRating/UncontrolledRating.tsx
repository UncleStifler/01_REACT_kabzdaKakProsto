import React, {useState} from 'react';
import UncontrolledStar from "./UncontrolledStar";


export const UncontrolledRating = () => {

    const [value, setValue] = useState(0)

    return (
        <div>
            <h4>Uncontrolled rating:</h4>
            <UncontrolledStar selected={value > 0} setValue={setValue} value={1}/>
            <UncontrolledStar selected={value > 1} setValue={setValue} value={2}/>
            <UncontrolledStar selected={value > 2} setValue={setValue} value={3}/>
            <UncontrolledStar selected={value > 3} setValue={setValue} value={4}/>
            <UncontrolledStar selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}