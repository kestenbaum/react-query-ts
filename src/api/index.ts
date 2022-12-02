import axios from "axios";
import {Post, Todos, User} from "../types";

export const API_URI = 'https://jsonplaceholder.typicode.com'
axios.defaults.baseURL = API_URI

export const getAll = {
    async getTodos (page:number, limit:number) {
        return await axios.get<Todos[]>(`${API_URI}/todos?_page=${page ? page : 1}&_limit=${limit ? limit : 5}`)
    },
    async getPosts(page:number, limit:number){
       return await axios.get<Post[]>(`${API_URI}/posts?_page=${page ? page : 1}&_limit=${limit ? limit : 5}`)
    },
    async getUsers () {
        return await axios.get<User[]>(`${API_URI}/users`)
    },
    async deletePost (id: string | number) {
        return await axios.delete(`${API_URI}/posts/${id}`)
    }
}