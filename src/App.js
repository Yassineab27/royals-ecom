import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ShopPage from "./components/shop/ShopPage";
import Home from "./components/pages/Home";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Pants from "./components/Pants";
import Shirts from "./components/Shirts";
import Shoes from "./components/Shoes";
import Hats from "./components/Hats";
import NavBar from "./components/NavBar";
import Auth from "./components/auth/Auth";
import "./App.scss";

function App() {
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

export default App;
