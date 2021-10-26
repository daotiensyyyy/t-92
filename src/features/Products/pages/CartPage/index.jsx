import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BackToTop from '../../../../components/BackToTop';
import { deleteFromCart, placeOrder } from '../../productSlice';
import './CartPage.css';
import ListCardItem from './components/ListCartItem';

function CartPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
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
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        // console.log('order', data.items.map(item => item.id));
        dispatch(placeOrder(data));
        const deletedId = data.items.map(item => item.id);
        // console.log('delete', deletedId);
        for (let index = 0; index < deletedId.length; index++) {
            // console.log('delete', deletedId[index]);
            dispatch(deleteFromCart(deletedId[index]));
        }
        history.push('/');
    };
    const totalPrice = cart.reduce(
        (total, current, index) => {
            return total + cart[index].totalPrice;
        }, 0);
    // console.log('totalPrice', totalPrice);
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
                {cart.length !== 0 ?
                    <div className="cart__total">Tổng thanh toán: {totalPrice}000đ</div>
                    :
                    ''
                }
            </div>
            <input type="checkbox" name="" id="checkout-input" onChange={handleCheckoutInputChecked} defaultChecked={isChecked} hidden />
            <div className="checkout-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Tên người nhận: (*)</label>
                    <input {...register('customerName', { required: true })} />
                    {errors.customerName && <span className="required-msg">Bắt buộc nhập thông tin</span>}
                    <label>Địa chỉ: (*)</label>
                    <input {...register('customerAddress', { required: true })} />
                    {errors.customerAddress && <span className="required-msg">Bắt buộc nhập thông tin</span>}
                    <label>Số điện thoại: (*)</label>
                    <input type="number" {...register('customerPhone', { maxLength: 10 })} required />
                    {errors.customerPhone && <span className="required-msg">Số điện thoại không đúng</span>}
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
                        <div onClick={() => reset()} className="checkout-action__reset"><i className="fas fa-redo-alt"></i></div>

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