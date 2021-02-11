import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../shared/components/FomElements/Button';
import Input from '../../shared/components/FomElements/Input';
import Card from '../../shared/components/UIElements/Card';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validator';

import './NewPlaces.css';

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire State Building',
        description: 'Mamarika Punya',
        imageUrl: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        address: 'NY, United States',
        location: {
            lat: 40.74909073529938,
            lng: -73.98570731534478
        },
        creator: 'u1'
    },
    {
        id:'p2',
        title:'Empire State Building',
        description: 'Mamarika Punya',
        imageUrl: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        address: 'NY, United States',
        location: {
            lat: 40.74909073529938,
            lng: -73.98570731534478
        },
        creator: 'u2'
    }
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;
    const [isLoading, setIsLoading] = useState(true);

    const [formState, inputhandler, setFormData] = useForm({
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
    }, false);

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    useEffect(() => {
        if (identifiedPlace) {
            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                },
                address: {
                    value: identifiedPlace.address,
                    isValid: true
                }
            }, true);
        }
        
        setIsLoading(false);
    }, [setFormData, identifiedPlace]);
    
    const placeUpdateSumbitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if (!identifiedPlace) {
        return (
            <div className="center">
                <Card>
                    <h2>Cound not find place</h2>
                </Card>
            </div>
        );
    };

    if (isLoading) {
        return (
            <div className="center">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <form className="place-form" onSubmit={placeUpdateSumbitHandler}>
            <div className="place-form__title">
                <h2>Update Place</h2>
            </div>
            <Input 
            id="title" 
            element="input" 
            type="text" 
            label="Title" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="Enter a valid title" 
            onInput={inputhandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
            />
            <Input 
            id="description" 
            element="textarea" 
            label="Description" 
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]} 
            errorText="Enter a valid description (min 5 characters)" 
            onInput={inputhandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
            />
            <Input 
            id="address" 
            element="input" 
            type="text" 
            label="Address" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="Enter a valid adress" 
            onInput={inputhandler}
            initialValue={formState.inputs.address.value}
            initialValid={formState.inputs.address.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>Update Place</Button>
        </form>
    );
};

export default UpdatePlace;