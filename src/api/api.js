import axios from 'axios';
import domain from '../configs/domain';
const api = {
    adminLogin(data) {
        return axios({
            url: `${domain.baseUrl}/signin`,
            // url: 'http://localhost:3000/api/signin',
            data,
            method: 'POST'
        });
    },

    adminLogout() {
        return axios({
            url: `${domain.baseUrl}/signout`,
            // url: 'http://localhost:3000/api/signin',
            method: 'POST',
        });
    },

    getAllProducts() {
        return axios({
            url: `${domain.baseUrl}/all-products`,
            method: 'GET'
        });
    },

    getProductBySlug(value) {
        return axios({
            url: `${domain.baseUrl}/product/${value}`,
            method: 'GET',
        })
    },

    getAllCategories() {
        return axios({
            url: `${domain.baseUrl}/all-categories`,
            method: 'GET',
        })
    },

    getProductByCategory(value) {
        return axios({
            url: `${domain.baseUrl}/category/${value}/product`,
            method: 'GET',
        })
    },

    placeOrder(data) {
        return axios({
            url: `${domain.baseUrl}/create-order`,
            data,
            method: 'POST'
        })
    }

}

export default api;