



import axios from "axios";

const CApi = axios.create({
    baseURL: 'https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1',
    headers: {
        'api-key':'8ZQDmrtgC0RX5AVLVQV5YjyS1pA1D7Sa7HZtlTSViEA58X8CUl8mueSLqHd3Md3y'
    },
});

export default CApi;