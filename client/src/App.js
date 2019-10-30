import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "./history";

import ShopPage from "./components/shop/ShopPage";
import Home from "./components/pages/Home";

import CollectionPage from "./components/pages/CollectionPage";
import NavBar from "./components/layout/NavBar";
import Auth from "./components/auth/Auth";
import Checkout from "./components/pages/Checkout";
import CheckoutConfirmation from "./components/pages/CheckoutConfirmation";
import Contact from "./components/pages/Contact";
import Alert from "./components/layout/Alert";
import NotFoundPage from "./components/pages/NotFoundPage";
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
            <Route path="/contact" component={Contact} />
            <Route path="/auth" component={Auth} />
            <Route exact path="/shop" component={ShopPage} />
            <Route path="/shop/:collectionId" component={CollectionPage} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              path="/checkout/confirmation"
              component={CheckoutConfirmation}
            />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
