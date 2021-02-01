import axios from 'axios'

const api = axios.create({
    baseURL: 'http://api.football-data.org/v2/',
    headers: {
        'X-Auth-Token': 'a9dcf362aecb43138df28fb61c6c47e3',
        "Content-Type": "application/json",
    }
})

export default api