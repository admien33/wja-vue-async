import axios from 'axios';

export default class ApiPosts {
    static getPosts() {
        return axios.get(BASE_URL+JSON_URL_POSTS);
    }
}
