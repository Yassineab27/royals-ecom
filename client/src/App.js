import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { setCurrentUser } from "./actions";
import history from "./history";

import ShopPage from "./components/shop/ShopPage";
import Home from "./components/pages/Home";
import CollectionPage from "./components/pages/CollectionPage";
import NavBar from "./components/layout/NavBar";
import Auth from "./components/auth/Auth";
import Checkout from "./components/pages/Checkout";
import Alert from "./components/layout/Alert";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <NavBar />
        <Alert />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={Auth} />
            <Route exact path="/shop" component={ShopPage} />
            <Route path="/shop/:collection" component={CollectionPage} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { setCurrentUser }
)(App);
