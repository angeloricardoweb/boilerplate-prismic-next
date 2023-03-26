import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.github.com/users/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})
