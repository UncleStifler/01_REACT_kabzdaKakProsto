import React, { useState} from 'react';
import UncontrolledStar from "./UncontrolledStar";




export const UncontrolledRating = () => {

    const [value, setValue] = useState(0)

    return (
        <div>
            <h4>Uncontrolled rating:</h4>
            <UncontrolledStar selected={value > 0} setValue={() => setValue (1)} />
            <UncontrolledStar selected={value > 1} setValue={() => setValue (2)} />
            <UncontrolledStar selected={value > 2} setValue={() => setValue (3)} />
            <UncontrolledStar selected={value > 3} setValue={() => setValue (4)} />
            <UncontrolledStar selected={value > 4} setValue={() => setValue (5)}/>
        </div>
    )
}