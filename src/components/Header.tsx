import React, {FC} from 'react';
import { Link } from 'react-router-dom';

export const Header:FC = () => {
    const auth = true
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/todos'}>Todos</Link>
            <Link to={'/posts'}>Posts</Link>
            {!auth ? <Link to={'/out'}>Logout</Link> : <Link to={'/login'}>Login</Link>}
        </div>
    );
};
