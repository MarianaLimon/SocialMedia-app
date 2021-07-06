import React from "react";

import Footer from "./components/footer";
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./screens/Register";
import TnksRegister from "./screens/ThanksRegister";
import Login from "./screens/Login";
import HomeDoctor from "./screens/HomeDoctor";
import EditProfile from "./screens/EditProfile";
import HomeAdmin from "./screens/Admin/Home/HomeAdmin";


import ArticlesList from "./screens/ArticlesList";
import ArticleDetail from "./screens/ArticleDetail";
import WebinarsList from "./screens/WebinarsList";
import WebinarDetail from "./screens/WebinarDetail";
import ProductsList from "./screens/ProductsList";
import ProductDetail from "./screens/ProductDetail";

// Examples and Tests
//import AppCardProductDetail from "./components/commons/AppCardProductDetail";
import CheckboxScreen from "./screens/CheckboxScreen";
import ModalScreen from "./screens/ModalScreen";
import Test from "./screens/Test.js";

function App() {
  return (
    <React.Fragment>
      <Header />

      <Router>
        <Switch>
          <Route exact path="/register"><Register /></Route>

          <Route exact path="/tnksregister"><TnksRegister /></Route>

          <Route exact path="/login"><Login /></Route>

          <Route exact path="/articles">
            <ArticlesList/>
          </Route>

          <Route exact path="/article-detail">
              <ArticleDetail />
          </Route>

          <Route exact path="/webinars">
            <WebinarsList/>
          </Route>

          <Route exact path="/webinar-detail">
            <WebinarDetail/>
          </Route>

          <Route exact path="/products">
            <ProductsList/>
          </Route>

          <Route exact path="/product-detail">
            <ProductDetail/>
          </Route>

          {/* ************ EXAMPLES AND TESTS ********* */}

         <Route exact path="/home"><HomeDoctor /></Route>

          <Route exact path="/profile"><EditProfile /></Route>

          <Route exact path="/homeadmin"><HomeAdmin /></Route>

          <Route exact path="/checkbox">
            <CheckboxScreen />
          </Route>

          <Route exact path="/modal">
            <ModalScreen />
          </Route>



          <Route exact path="/test" component={Test} />

        </Switch>
      </Router>

      <Footer />
    </React.Fragment>
  );
}

export default App;
