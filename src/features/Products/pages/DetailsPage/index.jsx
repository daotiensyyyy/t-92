import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import BackToTop from '../../../../components/BackToTop';
import { addToCart, fetchProductBySlug } from '../../productSlice';
import { v4 as uuidv4 } from 'uuid';
import './DetailPage.css';
import { IMAGES } from '../../../../app/logo';

const toppings = [
    {
        id: 1,
        value: 'tran-chau-den',
        name: 'Trân châu đường đen',
        price: 5,
    },
    {
        id: 2,
        value: 'tran-chau-gion',
        name: 'Trân châu giòn',
        price: 5,
    },
    {
        id: 3,
        value: 'pudding',
        name: 'Pudding trứng',
        price: 3,
    },
    {
        id: 4,
        value: 'nha-dam',
        name: 'Nha đam',
        price: 3,
    },
    {
        id: 5,
        value: 'suong-sao',
        name: 'Sương sáo',
        price: 3,
    },
    {
        id: 6,
        value: 'pho-mai-trung',
        name: 'Phô mai trứng',
        price: 5,
    },
];

function DetailsPage(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const slug = useParams('slug');
    const handleBackToTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        dispatch(fetchProductBySlug(slug.slug));
    }, [dispatch, slug.slug]);
    const state = useSelector(state => state.products);
    const { details } = state;
    const [checkedState, setCheckedState] = useState(
        new Array(toppings.length).fill(false)
    );
    const [priceToppings, setPriceToppings] = useState(0);
    const [checkedToppings, setCheckedToppings] = useState('');
    const handleToppingsChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + toppings[index].price;
                }
                return sum;
            }, 0);
        setPriceToppings(totalPrice);
        const toppingsSelected = updatedCheckedState.reduce(
            (selected, currentState, index) => {
                if (currentState === true) {
                    return selected + toppings[index].name + ', ';
                }
                return selected;
            }, '');
        setCheckedToppings(toppingsSelected);
    }
    const [sugar, setSugar] = useState('100');
    const handleSugarSelected = (e) => {
        setSugar(e.target.value);
    }
    const [ice, setIce] = useState('100');
    const handleIceSelected = (e) => {
        setIce(e.target.value);
    }
    const [qty, setQty] = useState(1);
    const handleQtyChange = (e) => {
        setQty(e.target.value);
    }
    const handleAddToCart = () => {
        let itemCart = {
            id: uuidv4(),
            product: details,
            toppings: checkedToppings,
            ice: ice,
            sugar: sugar,
            price: details.price + priceToppings,
            qty: qty,
            totalPrice: (priceToppings + details.price) * qty,
        }
        dispatch(addToCart(itemCart));
        history.push('/');
    }
    return (
        <div className="tea">
            <BackToTop onHandleBackToTop={handleBackToTop} />
            <div className="row details">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 details_img">
                    <img src={IMAGES.ts1} alt="" />
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 details_info">
                    <h2 className="details_info-name">{details.name}</h2>
                    <div className="details_info-toppings">Toppings:
                        {toppings.map((topping, index) =>
                            <div className="details_info-topping-item form-check" key={topping.id}>
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={topping.name}
                                    value={topping.value}
                                    checked={checkedState[index]}
                                    onChange={() => handleToppingsChange(index)}
                                />
                                <label htmlFor={`custom-checkbox-${index}`}>{topping.name}</label>
                            </div>
                        )}

                    </div>
                    <div className="details_info-sugar">
                        Đường:
                        <select className="form-select" aria-label="Default select example" onChange={handleSugarSelected}>
                            <option value="100">100%</option>
                            <option value="50">50%</option>
                            <option value="0">0%</option>
                        </select>
                    </div>
                    <div className="details_info-ice">
                        Đá:
                        <select className="form-select" aria-label="Default select example" onChange={handleIceSelected}>
                            <option value="100">100%</option>
                            <option value="50">50%</option>
                            <option value="0">0%</option>
                        </select>
                    </div>
                    <div className="details_info-qty">
                        <label htmlFor="qty-input">Số lượng:</label>
                        <input type="number"
                            id="qty-input"
                            value={qty}
                            onChange={handleQtyChange}
                        />

                    </div>
                    <hr />
                    <div className="details_info-price">Tổng: {(details.price + priceToppings) * qty}000đ</div>

                    <div className="btn btn-danger btn-add" onClick={handleAddToCart}>Thêm vào giỏ hàng</div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage;