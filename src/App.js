import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ChatBox from './components/ChatBox';
import SideBar from './components/SideBar';
import TopBarMobile from './components/TopBarMobile';
import Common from './layouts/Common';
function App() {
  const cartState = useSelector(state => state.products);
  const { cart } = cartState;
  let count = cart.length;
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
                  <Route path="/" component={Common} />
                </Switch>
                <ChatBox />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
