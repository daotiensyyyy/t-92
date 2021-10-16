import PropTypes from 'prop-types';
import React from 'react';
Category.propTypes = {
    categories: PropTypes.array,
    onHandleLoadProducts: PropTypes.func,
};
Category.defaultProps = {
    categories: [],
    onHandleLoadProducts: null,
}
function Category(props) {
    const { categories, onHandleLoadProducts } = props;

    return (
        <div className="category">
            Danh mục:
            <select className="category-select" onChange={onHandleLoadProducts}>
                {/* <option defaultValue>Trà sữa</option>
                                <option value="">Trà trái cây</option>
                                <option value="">Thức uống đá xay</option> */}
                <option value="default" defaultValue>Tất cả sản phẩm</option>
                {categories.map(category =>
                    <option key={category._id}
                        value={category._id}
                    >
                        {category.name}
                    </option>
                )}
            </select>
        </div>
    );
}

export default Category;