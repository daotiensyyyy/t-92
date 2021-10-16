import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import ReactPaginate from 'react-paginate';

ProductList.propTypes = {
    productList: PropTypes.array,
    onHandleAddClick: PropTypes.func,
};
ProductList.defaultProps = {
    productList: [],
    onHandleAddClick: null,
}

function ProductList(props) {
    const { productList, onHandleAddClick } = props;
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 9;
    const pageVisited = pageNumber * productsPerPage;
    const displayProducts = productList.slice(0)
        .slice(pageVisited, pageVisited + productsPerPage)
        .map((product) => {
            return (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 card-wrap" key={product._id}>
                    <ProductCard
                        product={product}
                        onAddClick={onHandleAddClick}
                    />
                </div>

            );
        });
    const pageCount = Math.ceil(productList.length / productsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <>
            {displayProducts}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </>
    );
}

export default ProductList;