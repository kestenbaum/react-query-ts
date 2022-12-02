import React, {FC, useState} from 'react';
import {useQuery} from "react-query";
import {getAll} from "../api";
import {nanoid} from "nanoid";


export const Posts:FC = () => {
    const [page, setPage] = useState<number>(1)
    const [limit] = useState<number>(10)
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>()

    const {data:response} = useQuery(['get-posts', page, limit], () => getAll.getPosts(page, limit))

    const pagination = Array.from(Array(response?.data && limit ).keys()).map(element => {
        return <button onClick={() => setPage(element + 1)} key={element}>{element + 1}</button>
    })

    const createPost = () => {
        const createNewPost = {
            "userId": nanoid(),
            "id": nanoid(),
            "title": title,
            "body": description
        }
        console.log(createNewPost)
    }

    return (
        <div>
            <form>
                <div>
                    <input
                        type="text"
                        placeholder={'title'}
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder={'description'}
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                </div>
                <button type={"button"} onClick={createPost}>Create</button>
            </form>

            {response?.data.map(post => <div key={post.id}>
                <div>Number Post: {post.id}</div>
                <div>Title: {post.title}</div>
                <div>Description: {post.body}</div>
            </div>)}

            {pagination}
        </div>
    );
};

