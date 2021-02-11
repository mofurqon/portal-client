import React from 'react';

import UserList from '../components/UserList'

const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'Bruce Wayne',
        image: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        places: 3
    },
    {
        id: 'u2',
        name: 'Barry Allen',
        image: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?cs=srgb&dl=pexels-jo%C3%A3o-jesus-1080213.jpg&fm=jpg',
        places: 2
    },
    {
        id: 'u3',
        name: 'Diana Prince',
        image: 'https://images.pexels.com/photos/4050220/pexels-photo-4050220.jpeg?cs=srgb&dl=pexels-ekaterina-bolovtsova-4050220.jpg&fm=jpg',
        places: 3
    }];

    return (
        <UserList items={USERS} />
    );
};

export default Users;