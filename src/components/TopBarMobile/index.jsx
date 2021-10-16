import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

TopBarMobile.propTypes = {
    count: PropTypes.number,
};

TopBarMobile.defaultProps = {
    count: 0,
}

function TopBarMobile(props) {
    const { count } = props;
    return (
        <>
            <div className="top-bar-mobile__icon">
                <label htmlFor="top-bar-mobile__input"><i className="fas fa-bars menu-icon"></i></label>
                <div className="top-bar-mobile__notification">
                    <div className="top-bar-mobile__notify">
                        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                        <span className="top-bar-mobile__count"><Link to="/cart">{count}</Link></span>
                    </div>
                </div>
            </div>
            <input type="checkbox" name="" id="top-bar-mobile__input" hidden />

            <label htmlFor="top-bar-mobile__input" className="overlay"></label>
        </>
    );
}

export default TopBarMobile;