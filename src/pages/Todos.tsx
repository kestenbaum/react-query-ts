import React, {FC} from 'react';
import {useQuery} from "react-query";
import {getAll} from "../api";

export const Todos:FC = () => {
    const {isLoading, data:response, error} = useQuery('get-todos', () => getAll.getTodos())

    return (
        <div>
           Todos
        </div>
    );
};
