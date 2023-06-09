import axios from 'axios';

const SOME_REST_API_URL = 'http://localhost:8080/';

class SomeService{
    getSome(){
        return axios.get(SOME_REST_API_URL);
    }
}

export default new SomeService();