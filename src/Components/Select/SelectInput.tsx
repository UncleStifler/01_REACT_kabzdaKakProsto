import React from 'react';
import {ItemType} from "../Accordion/Accordion";


type SelectInputPropsType = {
    value: any
    items: ItemType[]
}

const SelectInput = (props: SelectInputPropsType) => {

    const selectedItem = props.items.find(i => i.userName === props.value)

    return (
        <div>
            <select>
                <option value="">Minsk</option>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
            </select>
            <h3>{selectedItem && selectedItem.userName}</h3>
            {props.items.map(u => <div key={u.id}>{u.userName}</div>)}
        </div>

    );
};

export default SelectInput;