import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Pants from "./components/Pants";
import Shirts from "./components/Shirts";
import Shoes from "./components/Shoes";
import Hats from "./components/Hats";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mens" component={Mens} />
        <Route path="/womens" component={Womens} />
        <Route path="/pants" component={Pants} />
        <Route path="/shirts" component={Shirts} />
        <Route path="/shoes" component={Shoes} />
        <Route exact path="/hats" component={Hats} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
