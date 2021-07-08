import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./screens/Register";
import TnksRegister from "./screens/ThanksRegister";
import Login from "./screens/Login";
import HomeMedico from "./screens/Medico/HomeMedico";
import EditProfile from "./screens/Medico/EditProfile"
import HomeAdmin from "./screens/Admin/HomeAdmin";
import UsersList from "./screens/Admin/UsersList";
import UserValidate from "./screens/Admin/UserValidate"
import ArticlesListAdmin from "./screens/Admin/ArticlesList";
import WebinarsListAdmin from "./screens/Admin/WebinarsList";
import ProductsListAdmin from "./screens/Admin/ProductsList";
import ArticlesList from "./screens/Medico/ArticlesList";
import ArticleDetail from "./screens/Medico/ArticleDetail";
import WebinarsList from "./screens/Medico/WebinarsList";
import WebinarDetail from "./screens/Medico/WebinarDetail";
import ProductsList from "./screens/Medico/ProductsList";
import ProductDetail from "./screens/Medico/ProductDetail";

// Examples and Tests
//import AppCardProductDetail from "./components/commons/AppCardProductDetail";
import ModalScreen from "./screens/ModalScreen";
import Test from "./screens/Test.js";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/products-admin"><ProductsListAdmin /></Route>
          <Route exact path="/webinars-admin"><WebinarsListAdmin /></Route>
          <Route exact path="/articles-admin"><ArticlesListAdmin /></Route>
          <Route exact path="/user-validate"><UserValidate /></Route>
          <Route exact path="/users"><UsersList /></Route>

          <Route exact path="/register"><Register /></Route>

          <Route exact path="/tnksregister"><TnksRegister /></Route>

          <Route exact path="/"><Login /></Route>

          <Route exact path="/articles"><ArticlesList /></Route>

          <Route exact path="/article-detail">
            <ArticleDetail />
          </Route>

          <Route exact path="/webinars">
            <WebinarsList />
          </Route>

          <Route exact path="/webinar-detail">
            <WebinarDetail />
          </Route>

          <Route exact path="/products">
            <ProductsList />
          </Route>

          <Route exact path="/product-detail">
            <ProductDetail />
          </Route>

          {/* ************ EXAMPLES AND TESTS ********* */}

          <Route exact path="/home"><HomeMedico /></Route>

          <Route exact path="/profile"><EditProfile /></Route>

          <Route exact path="/homeadmin"><HomeAdmin /></Route>

          <Route exact path="/validated"><UserValidate /></Route>

          <Route exact path="/modal">
            <ModalScreen />
          </Route>

          <Route exact path="/test" component={Test} />

        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
