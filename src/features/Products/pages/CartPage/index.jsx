import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import BackToTop from '../../../../components/BackToTop';
import { deleteFromCart } from '../../productSlice';
import './CartPage.css';
import ListCardItem from './components/ListCartItem';

function CartPage(props) {
    const dispatch = useDispatch();
    const handleBackToTop = () => {
        window.scrollTo(0, 0);
    };
    const cartState = useSelector(state => state.products);
    const { cart } = cartState;
    // console.log('cart', cart);
    const handleDelete = (cart) => {
        const itemId = cart.id;
        dispatch(deleteFromCart(itemId));
        // console.log(cart, itemId);
    };
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckoutInputChecked = () => {
        setIsChecked(!isChecked);
    }
    const {
        register,
        handleSubmit,
        setValue,
    } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <div className="tea">
            <BackToTop onHandleBackToTop={handleBackToTop} />
            <div className="row cart">
                {cart.length === 0 ?
                    <div className="cart-empty">Không có sản phẩm nào trong giỏ hàng</div> :

                    <table className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <ListCardItem
                                cart={cart}
                                onHandleDelete={handleDelete}
                            />
                        </tbody>
                    </table>
                }
            </div>
            <input type="checkbox" name="" id="checkout-input" onChange={handleCheckoutInputChecked} defaultChecked={isChecked} hidden />
            <div className="checkout-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Tên người nhận: (*)</label>
                    <input {...register('customerName')} required />
                    <label>Địa chỉ: (*)</label>
                    <input {...register('customerAddress')} required />
                    <label>Số điện thoại: (*)</label>
                    <input {...register('customerPhone')} required />

                    <input {...register('items')} hidden />

                    <label>Thanh toán:</label>
                    <select {...register('paymentMethod')}>
                        <option value="thanh toan khi nhan">Thanh toán khi nhận</option>
                    </select>
                    <div className="checkout">
                        <button type="submit"
                            className="btn btn-danger checkout-submit-button"
                            onClick={() =>
                                setValue('items', cart)
                            }
                        >
                            Đặt hàng
                        </button>
                        <label htmlFor="checkout-input" className="btn btn-danger checkout-action__cancel">Đóng</label>

                    </div>
                </form>
            </div>
            {cart.length === 0 ? '' :
                <div className="checkout">
                    {!isChecked ?
                        <label htmlFor="checkout-input" className="btn btn-danger checkout-input-label">
                            Đặt hàng
                        </label>
                        :
                        ''
                    }
                </div>
            }
        </div>
    );
}

export default CartPage;