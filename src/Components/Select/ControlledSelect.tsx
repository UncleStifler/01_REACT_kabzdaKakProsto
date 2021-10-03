import React, {ChangeEvent, useState} from 'react';

const ControlledSelect = () => {

    const [parentValue, setParentValue] = useState<string | undefined>(undefined)


    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <div>
            <select
                value={parentValue}
                onChange={onChange}>
                <option>none</option>
                <option value={"1"}>Barcelona</option>
                <option value={"2"}>Berlin</option>
                <option value={"3"}>Tokyo</option>
                <option value={"4"}>Washington</option>
            </select>
        </div>
    );
};

export default ControlledSelect;