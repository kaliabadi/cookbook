import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import MyRecipes from "./view/pages/MyRecipes";
import Featured from "./view/pages/Featured";
import Layout from "./view/pages/Layout";
import Settings from "./view/pages/Settings";

const app = document.getElementById("app");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="myrecipes(/:recipe)" name="myrecipes" component={MyRecipes}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
