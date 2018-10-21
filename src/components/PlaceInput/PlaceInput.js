import React from 'react';
import DefaultInput from '../UI/DefaultInput/DefaultInput';
const placeInput = props => (
    <DefaultInput
        placeholder={props.placeholder}
        value={props.placeName}
        onChangeText={props.onChangeText} />
);

export default placeInput;




