import axios from "axios";
import domain from "../configs/domain";
axios.defaults.withCredentials = true;

const authApi = {

    adminGetAllProducts() {
        return axios({
            url: `${domain.adminUrl}/all-products`,
            method: 'GET',
            withCredentials: false,
        });
    },

    createProduct(data) {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("description", data.description);
        formData.append("categories", data.categories);
        formData.append("image", data.image[0]);
        return axios({
            url: `${domain.adminUrl}/create-product`,
            method: 'POST',
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            withCredentials: true,
        });
    },

    deleteProductById(value) {
        return axios({
            url: `${domain.adminUrl}/product/${value}/delete`,
            method: 'DELETE',
            withCredentials: true,
        });
    },

    getProductById(value) {
        return axios({
            url: `${domain.adminUrl}/product/${value}`,
            method: 'GET',
            withCredentials: true,
        });
    },

    editProductById(value, data) {
        return axios({
            url: `${domain.adminUrl}/product/${value}/edit`,
            method: 'PUT',
            data,
            withCredentials: true,
        });
    },

}

export default authApi;