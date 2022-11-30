import React, {FC} from 'react';
import {useQuery} from "react-query";
import {getAll} from "../api";

export const Users:FC = () => {
    const {data:response} = useQuery('get-users', () => getAll.getUsers())
    return (
        <div>
            {response?.data.map(user => <div key={user.id}>{user.username}</div>)}
        </div>
    );
};
