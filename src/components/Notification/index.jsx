import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

Notification.propTypes = {
    count: PropTypes.number,
};

Notification.defaultProps = {
    count: 0,
}

function Notification(props) {
    const { count } = props;
    return (
        <div className="top-bar__notification">
            <div className="top-bar__notify">
                <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                <span className="top-bar__count">{count}</span>
            </div>
        </div>
    );
}

export default Notification;