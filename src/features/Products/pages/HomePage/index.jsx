import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BackToTop from '../../../../components/BackToTop';
import { fetchAllCategories, fetchAllProducts, fetchProductsByCategory } from '../../productSlice';
import Category from './components/Category';
import ProductList from './components/ProductList';

function HomePage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleBackToTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        dispatch(fetchAllCategories());
        dispatch(fetchAllProducts());
    }, [dispatch]);
    const handleLoadProducts = (e) => {
        // console.log('clicked', e.target.value);
        e.preventDefault();
        // console.log(e.target.value);
        if (e.target.value === 'default') {
            dispatch(fetchAllProducts());
        } else {
            dispatch(fetchProductsByCategory(e.target.value));
        }
    }
    const productState = useSelector(state => state.products);
    const { products, categories } = productState;
    // console.log('products', products);
    const handleAddClick = (product) => {
        const productUrl = `${product.slug}`;
        history.push(productUrl);
    }
    // const cartState = useSelector(state => state.products);
    // const { cart } = cartState;
    // let count = cart.length;
    return (
        <div className="tea">
            <Category categories={categories}
                onHandleLoadProducts={handleLoadProducts}
            />
            <BackToTop onHandleBackToTop={handleBackToTop} />

            <div className="row">
                <ProductList
                    productList={products}
                    onHandleAddClick={handleAddClick}
                />
            </div>
        </div>
    );
}

export default HomePage;