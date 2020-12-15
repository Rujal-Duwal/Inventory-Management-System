import React from 'react';
import CreatableSelect from 'react-select/creatable';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const handleChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
};
const handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
};


const selectStyles = {
    menu: base => ({
        ...base,
        zIndex: 100
    })
};

export default function CreatableSingle({placeHolder}) {

        return (
            <CreatableSelect
                styles={selectStyles}
                isClearable
                onChange={handleChange}
                onInputChange={handleInputChange}
                options={options}
                placeholder={placeHolder}
            />
        );

}