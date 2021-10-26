import React from 'react';
import { useRouteMatch } from 'react-router';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AddPage from '../../features/Auth/pages/AddPage';
import EditPage from '../../features/Auth/pages/EditPage';
const AdminPage = React.lazy(() => import('../../features/Auth/pages/AdminPage'));
function AdminLayout(props) {
    const match = useRouteMatch();
    // console.log('match', match);
    return (
        <>
            <Switch>
                <Route exact path={match.url} component={AdminPage} />
                <Route path={`${match.url}/new-product`} component={AddPage} />
                <Route path={`${match.url}/:id`} component={EditPage} />
            </Switch>
        </>
    );
}

export default AdminLayout;