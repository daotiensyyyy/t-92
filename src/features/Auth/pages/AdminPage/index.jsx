import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import BackToTop from '../../../../components/BackToTop';
import { adminFetchAllProducts, deleteProduct } from '../../authSlice';
import './AdminPage.css';
import Table from './components/Table';
function AdminPage(props) {
    const handleBackToTop = () => {
        window.scrollTo(0, 0);
    };
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(adminFetchAllProducts());
    }, [dispatch])
    const authState = useSelector(state => state.auth);
    const { products } = authState;
    // console.log('products', products);
    const [search, setSearch] = useState('');
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const handleDelete = (product) => {
        // console.log('delete', product);
        dispatch(deleteProduct(product._id));
    };
    const handleEdit = (product) => {
        // console.log('productId', product._id);
        // const editUrl = `/v1/${product._id}`;
        // history.push(editUrl);
        history.push('/v1');
    }
    return (
        <div className="admin">
            <BackToTop onHandleBackToTop={handleBackToTop} />
            <div className="search">
                <label className="label-search" htmlFor="search">
                    Tìm sản phẩm:
                    <input id="search" type="text" onChange={handleSearch} />
                </label>
            </div>
            <div className="row table">
                <Table length={products.length}
                    search={search}
                    products={products}
                    onHandleDelete={handleDelete}
                    onHandleEdit={handleEdit}
                />
            </div>
        </div>
    );
}

export default AdminPage;