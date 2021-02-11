import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PACES = [
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

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;