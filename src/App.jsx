import React from "react";

import Footer from "./components/footer";
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Front Screens
import Register from "./screens/Register";
import TnksRegister from "./screens/ThanksRegister";
import Login from "./screens/Login";
import HomeDoctor from "./screens/HomeDoctor";

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

          {/* ************ FRONT SCREENS ********* */}

          <Route exact path="/register"><Register /></Route>

          <Route exact path="/tnksregister"><TnksRegister /></Route>

          <Route exact path="/"><Login /></Route>

          <Route exact path="/home"><HomeDoctor /></Route>

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
