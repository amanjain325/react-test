import axios from 'axios';

export class UserService {

    constructor() {

    }

    static getCall(url, params) {
        return axios.get(url, { params: params })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return error;
            });
    }

    static postCall(url, params, auth) {
        axios.post(url, params)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return error;
            });
    }
}