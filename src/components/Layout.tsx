import React, {FC} from 'react';
import {Header} from "./Header";
import {Home, Login, Posts, Todos, Users} from "../pages";
import { Route, Routes } from 'react-router-dom';

export const Layout:FC = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/todos'} element={<Todos/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
        </div>
    );
};
