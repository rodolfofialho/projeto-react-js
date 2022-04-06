// minha chave: 

import axios  from "axios";

export const key = "12a8e8c7733b0297998e3f1c15c51dda338133e6";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;

