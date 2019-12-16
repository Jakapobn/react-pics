import Axios from 'axios'


export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c2eeb4dbadce0d3c1f44449e2e1f8804c807d8c1c80439dca09fa6250d5cb97b'
    }
});