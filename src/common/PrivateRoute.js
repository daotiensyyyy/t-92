import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute(props) {
    const authState = useSelector(state => state.auth.loginSuccess);
    if (authState === 0) {
        return <Redirect to="/login" />
    }
    return <Route {...props} />;

};