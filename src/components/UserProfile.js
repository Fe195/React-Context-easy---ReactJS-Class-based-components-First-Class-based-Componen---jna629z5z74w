import React from 'react';
import { useContext } from 'react';

import { UserContext } from "./App";

const UserProfile = () => {
    const detail = useContext(UserContext);
    console.log(detail);

    return (
        <>
            <h1 id='name'>Name:- {detail.name}</h1>
            <h1 id='age'>Age:- {detail.age}</h1>
        </>
    )

}

export { UserProfile }
