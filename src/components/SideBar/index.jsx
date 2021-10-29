import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

function SideBar(props) {
    const history = useHistory();
    const handleLogoClick = () => {
        history.push('/');
    }
    const authState = useSelector(state => state.auth);
    const { loginSuccess } = authState;
    return (
        <>
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 side-bar">
                <div className="side-bar__menu">
                    <div className="side-bar__menu-logo" onClick={handleLogoClick}>
                        {/* <img src={IMAGES.logo1} alt="" className="" /> */}
                        <span className="side-bar__menu-logo-name">Brand</span>
                    </div>
                    <ul className="side-bar__menu-list">
                        <li className="side-bar__menu-item">
                            <Link to="/" className="side-bar__menu-item-link">
                                {/* <i className="fas fa-home"></i> */}
                                <span>Trang chủ</span>
                            </Link>
                        </li>
                        <li className="side-bar__menu-item">
                            <Link to="/events" className="side-bar__menu-item-link" href="/#">
                                {/* <i className="fas fa-id-card-alt"></i> */}
                                <span>Sự kiện khuyến mãi</span>
                            </Link>
                        </li>
                        {loginSuccess === 1 ?
                            <>
                                <li className="side-bar__menu-item">
                                    <Link to="/v1" className="side-bar__menu-item-link" href="/#">
                                        {/* <i className="fas fa-user-shield"></i> */}
                                        <span>Đi đến trang admin</span>
                                    </Link>
                                </li>
                                <li className="side-bar__menu-item">
                                    <Link to="/v1/new-product" className="side-bar__menu-item-link" href="/#">
                                        {/* <i className="fas fa-plus-square"></i> */}
                                        <span>Thêm sản phẩm mới</span>
                                    </Link>
                                </li>
                            </>
                            : ''}
                        <hr />
                        <div className="side-bar__contact">
                            <div className="side-bar__contact-address">address</div>
                            <div className="side-bar__contact-phone">phone</div>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="side-bar-mobile">
                <div className="side-bar-mobile__menu">
                    <div className="side-bar-mobile__menu-logo" onClick={handleLogoClick}>
                        {/* <img src={IMAGES.logo1} alt="" className="" /> */}
                        <span className="side-bar-mobile__menu-logo-name">Brand</span>
                    </div>
                    <ul className="side-bar-mobile__menu-list">
                        <li className="side-bar-mobile__menu-item">
                            <Link to="/" className="side-bar-mobile__menu-item-link">
                                {/* <i className="fas fa-home"></i> */}
                                <span>Trang chủ</span>
                            </Link>
                        </li>
                        <li className="side-bar-mobile__menu-item">
                            <Link to="/events" className="side-bar-mobile__menu-item-link">
                                {/* <i className="fas fa-id-card-alt"></i> */}
                                <span>Sự kiện khuyến mãi</span>
                            </Link>
                        </li>
                        {loginSuccess === 1 ?
                            <>
                                <li className="side-bar__menu-item">
                                    <Link to="/v1" className="side-bar__menu-item-link" href="/#">
                                        {/* <i className="fas fa-user-shield"></i> */}
                                        <span>Đi đến trang admin</span>
                                    </Link>
                                </li>
                                <li className="side-bar__menu-item">
                                    <Link to="/v1/new-product" className="side-bar__menu-item-link" href="/#">
                                        {/* <i className="fas fa-plus-square"></i> */}
                                        <span>Thêm sản phẩm mới</span>
                                    </Link>
                                </li>
                            </>
                            : ''}
                        <hr />
                        <div className="side-bar-mobile__contact">
                            <div className="side-bar-mobile__contact-address">address</div>
                            <div className="side-bar-mobile__contact-phone">phone</div>
                        </div>
                    </ul>
                </div>
                <label htmlFor="top-bar-mobile__input" className="side-bar-mobile__close"><i className="fas fa-times"></i></label>
            </div>
        </>
    );
}

export default SideBar;