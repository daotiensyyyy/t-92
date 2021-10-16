import React from 'react';
import PropTypes from 'prop-types';
import { IMAGES } from '../../../../../../app/logo';

ProductCard.propTypes = {
    product: PropTypes.object,
    onAddClick: PropTypes.func,
};
ProductCard.defaultProps = {
    product: {},
    onAddClick: null,
}

function ProductCard(props) {
    const { product, onAddClick } = props;
    const handleClick = () => {
        if (onAddClick) {
            onAddClick(product);
        }
    }
    return (
        <>
            <div className="card" onClick={handleClick}>
                <img src={IMAGES.ts1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                </div>
            </div>
            <div className="card-overlay" onClick={handleClick}>+</div>
        </>
    );
}

export default ProductCard;