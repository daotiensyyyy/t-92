import PropTypes from 'prop-types';
import React from 'react';
import domain from '../../../../../../configs/domain';

CartItem.propTypes = {
    cartItem: PropTypes.object,
    onHandleDelete: PropTypes.func,
};

CartItem.defaultProps = {
    cartItem: {},
    onHandleDelete: null
}

function CartItem(props) {
    const { cartItem, onHandleDelete } = props;
    // console.log(cartItem)
    const handleDelete = () => {
        if (onHandleDelete) {
            onHandleDelete(cartItem);
        }
    }
    return (
        <>
            <tr className="cart_product">
                <td className="cart_product-img">
                    <img src={domain.imageUrl + cartItem.image} alt="" />
                </td>
                <td className="cart_product-name">{cartItem.product.name}
                    {cartItem.toppings.length === 0 ? '' :
                        <><br /><span className="cart_product-toppings">({cartItem.toppings})</span></>
                    }
                    <br />
                    <span className="cart_product-price">{cartItem.price}000đ</span>
                </td>
                <td className="cart_product-qty">{cartItem.qty}</td>
                <td className="cart_product-total-price">{cartItem.totalPrice}000đ</td>
                <td className="cart_product-delete">
                    <i className="fas fa-trash"
                        onClick={handleDelete}
                    />
                </td>
            </tr>
        </>
    );
}

export default CartItem;