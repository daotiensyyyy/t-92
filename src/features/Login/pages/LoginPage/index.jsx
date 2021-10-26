import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BackToTop from '../../../../components/BackToTop';
import { adminLogin } from '../../../Auth/authSlice';
import './LoginPage.css';

function LoginPage(props) {
    const handleBackToTop = () => {
        window.scrollTo(0, 0);
    };
    const history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await dispatch(adminLogin(data));
        history.push('/v1');
    };

    return (
        <div className="login">
            <BackToTop onHandleBackToTop={handleBackToTop} />
            <div className="row login-form">
                <h3 className="login-form__title">Admin Login</h3>
                <form className="login-form__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Email address:(*)</label>
                        <input {...register("username")} type="text" className="form-control" id="username" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:(*)</label>
                        <input {...register("password")} type="password" className="form-control" id="password" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    );
}

export default LoginPage;