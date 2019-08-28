import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { auth, createUserDoc } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./actions";

import ShopPage from "./components/shop/ShopPage";
import Home from "./components/pages/Home";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Pants from "./components/Pants";
import Shirts from "./components/Shirts";
import Shoes from "./components/Shoes";
import Hats from "./components/Hats";
import NavBar from "./components/layout/NavBar";
import Auth from "./components/auth/Auth";
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
            <Route path="/shop" component={ShopPage} />
            <Route path="/mens" component={Mens} />
            <Route path="/womens" component={Womens} />
            <Route path="/pants" component={Pants} />
            <Route path="/shirts" component={Shirts} />
            <Route path="/shoes" component={Shoes} />
            <Route path="/hats" component={Hats} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { currentUser: state.user.currentUser };
};

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(App);
