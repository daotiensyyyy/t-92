import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

Table.propTypes = {
    products: PropTypes.array,
    length: PropTypes.number,
    search: PropTypes.string,
    onHandleDelete: PropTypes.func,
    onHandleEdit: PropTypes.func,
};

Table.defaultProps = {
    products: [],
    length: 0,
    search: '',
    onHandleDelete: null,
    onHandleEdit: null,
}

function Table(props) {
    const { products, length, search, onHandleDelete, onHandleEdit } = props;

    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 20;
    const pageVisited = pageNumber * productsPerPage;
    const displayProducts = products
        .filter((val) => {
            if (search === '') return val;
            return val.name.toLowerCase().includes(search.toLowerCase());
        })
        .slice(0)
        .slice(pageVisited, pageVisited + productsPerPage)
        .map((product) => {

            const handleDelete = () => {
                if (onHandleDelete) {
                    onHandleDelete(product);
                }
            }

            const handleEdit = () => {
                if (onHandleEdit) {
                    onHandleEdit(product);
                }
            }

            return (
                <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.categories.map(category =>
                        category.name
                    )}</td>
                    <td>
                        <i className="far fa-edit" onClick={handleEdit}></i>
                        <i className="far fa-trash-alt" onClick={handleDelete}></i>
                    </td>
                </tr>
            );
        });
    const pageCount = Math.ceil(products.length / productsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Tên sản phẩm ({length})</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Danh mục</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {displayProducts}
                </tbody>
            </table>
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

export default Table;