import React, {FC, useState} from 'react';
import {useQuery} from "react-query";
import {getAll} from "../api";

export const Posts:FC = () => {
    const [page, setPage] = useState<number>(1)
    const [limit] = useState<number>(10)

    const {data:response} = useQuery(['get-posts', page, limit], () => getAll.getPosts(page, limit))

    const pagination = Array.from(Array(response?.data && limit ).keys()).map(element => {
        return <button onClick={() => setPage(element + 1)} key={element}>{element + 1}</button>
    })

    return (
        <div>
            {response?.data.map(post => <div key={post.id}>
                <div>Number Post: {post.id}</div>
                <div>Title: {post.title}</div>
                <div>Description: {post.body}</div>
            </div>)}
            {pagination}
        </div>
    );
};

