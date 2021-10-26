import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import BackToTop from '../../../../components/BackToTop';
import { editProductById, fetchProductById } from '../../authSlice';
import './EditPage.css';

function EditPage(props) {
    const handleBackToTop = () => {
        window.scrollTo(0, 0);
    };
    const dispatch = useDispatch();
    const history = useHistory();
    const param = useParams('id');
    // console.log(param);
    useEffect(() => {
        dispatch(fetchProductById(param.id));
    }, [dispatch, param.id]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        let itemName = data.name;
        let itemPrice = parseInt(data.price);
        let item = { name: itemName, price: itemPrice };
        dispatch(editProductById(param.id, item));
        history.push('/v1')
    };
    return (
        <div className="edit">
            <BackToTop onHandleBackToTop={handleBackToTop} />
            <div className="row">
                <form className="edit__form" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="edit__title">Chỉnh sửa thông tin sản phẩm</h3>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Tên sản phẩm:</label>
                        <input {...register("name")} type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Giá:</label>
                        <input {...register("price")} type="text" className="form-control" id="price" />
                    </div>

                    <button type="submit" className="btn btn-danger">Hoàn tất</button>
                </form>
            </div>
        </div>
    );
}

export default EditPage;