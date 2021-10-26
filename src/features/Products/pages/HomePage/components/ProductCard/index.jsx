import PropTypes from 'prop-types';
import React from 'react';
import domain from '../../../../../../configs/domain';

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
    // console.log('product', product);
    const handleClick = () => {
        if (onAddClick) {
            onAddClick(product);
        }
    }
    const srcImage = domain.imageUrl + product.image;
    return (
        <>
            <div className="card" onClick={handleClick}>
                <img src={srcImage} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                </div>
            </div>
            <div className="card-overlay" onClick={handleClick}>+</div>
        </>
    );
}

export default ProductCard;