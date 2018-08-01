import axios from 'axios';

// TODO: Replace this with actual JWT token from Keycloak
const id_token = "secret";
axios.defaults.headers.post['Content-Type'] = 'application/json';
// Create axios instance for api calls
var instance = null;

export const setAuth = () => {
    instance = axios.create({
        baseURL: '',
        timeout: 5000,
        headers: {
            'Authorization': localStorage.jwt,
            'Content-Type': 'application/json'
        }
    });
}

export const Get = (route, data) => {
    instance || setAuth()
    return instance.get(route, data == {} ? null : JSON.stringify(data))
}

export const Post = (route, data) => {
    instance || setAuth()
    return instance.post(route, JSON.stringify(data))
}

export const Put = (route, data) => {
    instance || setAuth()
    return instance.put(route, JSON.stringify(data))
}

