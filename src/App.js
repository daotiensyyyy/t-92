import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ChatBox from './components/ChatBox';
import SideBar from './components/SideBar';
import TopBarMobile from './components/TopBarMobile';
import PrivateRoute from './common/PrivateRoute';
import AdminLayout from './layouts/AdminLayout';
import Common from './layouts/Common';
import AuthVerify from './common/AuthVerify';
import { adminLogout } from './features/Auth/authSlice';
function App() {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.products);
  const { cart } = cartState;
  let count = cart.length;
  const handleLogout = () => {
    dispatch(adminLogout());
  }
  return (
    <>
      <Suspense fallback={<div className="loader_bg">
        <div className="loader"><h2>....Please wait!</h2></div>
      </div>}>
        <BrowserRouter>
          <div className="app container-fluid">
            <div className="row">
              <TopBarMobile count={count} />
              <SideBar />
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 main-board">
                <Switch>
                  <PrivateRoute path="/v1" component={AdminLayout} />
                  <Route path="/" component={Common} />
                </Switch>
                <ChatBox />
                <AuthVerify logOut={handleLogout} />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
