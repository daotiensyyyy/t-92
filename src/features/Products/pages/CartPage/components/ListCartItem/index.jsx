import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem';

ListCardItem.propTypes = {
    cart: PropTypes.array,
    onHandleDelete: PropTypes.func,
};

ListCardItem.defaultProps = {
    cart: [],
    onHandleDelete: null,
};

function ListCardItem(props) {
    const { cart, onHandleDelete } = props;
    return (
        <>
            {cart.map((c, index) =>
                <CartItem
                    key={index}
                    cartItem={c}
                    onHandleDelete={onHandleDelete}
                />
            )}
        </>
    );
}

export default ListCardItem;