import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BackToTop from '../../../../components/BackToTop';
import { createProduct } from '../../authSlice';
import './AddPage.css';

function AddPage(props) {
    const handleBackToTop = () => {
        window.scrollTo(0, 0);
    };
    const dispatch = useDispatch();
    const history = useHistory();
    const categories = useSelector(state => state.products.categories);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data)
        dispatch(createProduct(data));
        history.push('/v1');
    };
    return (
        <div className="add">
            <BackToTop onHandleBackToTop={handleBackToTop} />
            <div className="row">
                <form className="add__form" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="add__title">Thêm sản phẩm mới</h3>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Tên sản phẩm:</label>
                        <input {...register("name")} type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Giá:</label>
                        <input {...register("price")} type="text" className="form-control" id="price" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Mô tả sản phẩm:</label>
                        <input {...register("description")} type="text" className="form-control" id="description" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Danh mục:</label>
                        {/* <select {...register("categories")} className="form-select" onChange={handleCategoriesChange}> */}
                        <select {...register("categories")} className="form-select">
                            <option defaultValue>Chọn danh mục sản phẩm</option>
                            {categories.map(category =>
                                <option key={category._id}
                                    value={category.name}
                                >
                                    {category.name}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="image">Hình ảnh:</label>
                        <input {...register("image")} type="file" className="form-control" id="image" />
                    </div>

                    <button type="submit" className="btn btn-primary">Hoàn tất</button>
                </form>
            </div>
        </div>
    );
}

export default AddPage;