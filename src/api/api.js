import axios from 'axios';
import domain from '../configs/domain';
const api = {

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
    }

}

export default api;