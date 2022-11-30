import React, {FC, useState} from 'react';
import {useQuery} from "react-query";
import {getAll} from "../api";

export const Todos:FC = () => {
    const [page, setPage] = useState<number>(1)
    const [limit] = useState<number>(10);
    const  {data:response} = useQuery(['get-todos', page, limit], () => getAll.getTodos(page, limit))

    const pagination = Array.from(Array(response?.data && limit ).keys()).map(element => {
        return <button onClick={() => setPage(element + 1)} key={element}>{element + 1}</button>
    })

    return (
        <div>
           Todos
            {response?.data.map(todo =>
                <div key={todo.id}>{todo.id} {todo.title} <input type={'checkbox'}/></div>)}
            {pagination}
        </div>
    );
};
