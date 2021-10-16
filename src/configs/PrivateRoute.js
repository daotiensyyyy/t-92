import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute(props) {
    const isLoggedIn = Boolean(localStorage.getItem('userLogin'));
    if (!isLoggedIn) {
        return <Redirect to="/login" />
    }
    return <Route {...props} />;

};