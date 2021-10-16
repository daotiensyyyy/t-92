import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CartPage from '../../features/Products/pages/CartPage';
import EventPage from '../../features/Products/pages/EventPage';
import DetailsPage from '../../features/Products/pages/DetailsPage';
const HomePage = React.lazy(() => import('../../features/Products/pages/HomePage'));
function Common(props) {
    return (
        <>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/events" component={EventPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/:slug" component={DetailsPage} />
            </Switch>
        </>
    );
}

export default Common;