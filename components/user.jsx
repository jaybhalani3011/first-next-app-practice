import React from 'react';

export default function User({user,index}) {
    return (
        <div>
            <h2>User :- {user.id}</h2>
            <ul key={index}>
                <li key={index}>id : {user.id}</li>
                <li key={index}>name : {user.name}</li>
                <li key={index}>username : {user.username}</li>
                <li key={index}>email : {user.email}</li>
                <li key={index}>phone : {user.phone}</li>
            </ul>
        </div>
    );
}
