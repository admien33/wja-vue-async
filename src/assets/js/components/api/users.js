import axios from 'axios';

export default class ApiUsers {
    static getUsers() {
        return axios.get(`https://jsonplaceholder.typicode.com/users`);
    }
}