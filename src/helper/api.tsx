import axios from 'axios';

const BASE_URL = 'http://localhost:7000/';
export const Api = {
    signIn: ({data}: { data: any }) => {
        return axios({
            method: 'post',
            url: 'add_entry',
            data: data,
            baseURL: BASE_URL
        });
    }
};

export default Api;