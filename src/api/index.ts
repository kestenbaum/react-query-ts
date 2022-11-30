import axios from "axios";
import {Todos} from "../types";

export const API_URI = 'https://jsonplaceholder.typicode.com'
axios.defaults.baseURL = API_URI

export const getAll = {
   getTodos(page:number, limit:number) {
       return axios.get<Todos[]>(`${API_URI}/todos?_page=${page ? page : 1}&_limit=${limit ? limit : 5}`)
   }
}