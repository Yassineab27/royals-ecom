import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { auth, createUserDoc } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./actions";

import ShopPage from "./components/shop/ShopPage";
import Home from "./components/pages/Home";
import CategoryPage from "./components/pages/CategoryPage";
import NavBar from "./components/layout/NavBar";
import Auth from "./components/auth/Auth";
import Checkout from "./components/pages/Checkout";
import "./App.scss";

class App extends React.Component {
  unsubFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubFromAuth = auth.onAuthStateChanged(async user => {
      console.log(user);
      if (user) {
        const userRef = await createUserDoc(user);

        userRef.onSnapshot(document => {
          // console.log(document);
          const user = {
            id: document.id,
            ...document.data()
          };
          setCurrentUser(user);
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={Auth} />
            <Route exact path="/shop" component={ShopPage} />
            <Route path="/shop/:category" component={CategoryPage} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { setCurrentUser }
)(App);
