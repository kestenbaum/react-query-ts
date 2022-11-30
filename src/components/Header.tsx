import React, {FC} from 'react';
import { Link } from 'react-router-dom';

export const Header:FC = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/todos'}>Todos</Link>
            <Link to={'/posts'}>Posts</Link>
            {true ? <Link to={'/out'}>Logout</Link> : <Link to={'/login'}>Login</Link>}
        </div>
    );
};
