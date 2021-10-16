import React from 'react';
import PropTypes from 'prop-types';

BackToTop.propTypes = {
    onHandleBackToTop: PropTypes.func,
};
BackToTop.defaultProps = {
    onHandleBackToTop: null,
}
function BackToTop(props) {
    const { onHandleBackToTop } = props;
    return (
        <div className="back-to-top" onClick={onHandleBackToTop}>
            <i className="fas fa-arrow-up"></i>
        </div>
    );
}

export default BackToTop;