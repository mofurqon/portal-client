import React, { useCallback, useReducer } from 'react';
import Button from '../../shared/components/FomElements/Button';
import Input from '../../shared/components/FomElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validator';

import './NewPlaces.css';

const NewPlace = () => {
    const [formState, inputhandler] = useForm({
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send to backend
    };

    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <div className="place-form__title">
                <h2>Add New Place</h2>
            </div>
            <Input 
            id="title"
            element="input" 
            type="text" label="Title" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="Enter a valid title"
            onInput={inputhandler}
            />
            <Input 
            id="description"
            element="textarea" 
            label="Description" 
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]} 
            errorText="Enter a valid description (min 5 character)"
            onInput={inputhandler}
            />
             <Input 
            id="address"
            element="input" 
            type="text"
            label="Address" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="Enter a valid address"
            onInput={inputhandler}
            />
            <Button type="submit" disabled={!formState.isValid}>Add Place</Button>
        </form>
        
    );
};

export default NewPlace;