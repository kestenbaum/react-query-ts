import axios from "axios";

export const API_URI = 'https://jsonplaceholder.typicode.com'
axios.defaults.baseURL = API_URI

export const getAll = {
   getTodos() {
       return axios.get(`${API_URI}/todos`)
   }
}