import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

AuthVerify.propsTypes = {
    logOut: PropTypes.func,
}

AuthVerify.defaultProps = {
    logOut: null,
}

function AuthVerify(props) {

    const { logOut } = props;
    const user = useSelector(state => state.auth.userLogin);

    props.history.listen(() => {
        // const user = localStorage.getItem("user");

        if (user) {
            const decodedJwt = parseJwt(user.accessToken);

            // if (decodedJwt.exp * 1000 < Date.now()) {
            if (decodedJwt * 1000 < Date.now()) {
                logOut();
            }
        }
    });
    return <div></div>;
}

export default withRouter(AuthVerify);