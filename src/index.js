import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/navbar";
import Gallery from "./Components/gallery";
import Notfound from "./Components/notfound";

ReactDOM.render(
  <Router>
    <div>
      <Navigation />
      <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/gallery" component={Gallery} />
      <Route component={Notfound} />
      </Switch>
      </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
