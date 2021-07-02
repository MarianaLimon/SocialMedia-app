import React from "react";

import Footer from "./components/footer";
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./screens/Register";
import TnksRegister from "./screens/ThanksRegister";
import Login from "./screens/Login";
import HomeDoctor from "./screens/HomeDoctor";

import CheckboxScreen from "./screens/CheckboxScreen";
import ModalScreen from "./screens/ModalScreen";
import AppCard from "./components/commons/AppCard";
import AppCardDetail from "./components/commons/AppCardDetail";
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

          <Route exact path="/home"><HomeDoctor /></Route>

          <Route exact path="/checkbox">
            <CheckboxScreen />
          </Route>

          <Route exact path="/modal">
            <ModalScreen />
          </Route>

          <Route exact path="/card">
            <div className="container">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  <AppCard />
                </div>
                <div className="col-2"></div>
              </div>
            </div>
          </Route>


          <Route exact path="/card-detail">
            <div className="container">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                  <AppCardDetail />
                </div>
              </div>
            </div>
          </Route>


          <Route exact path="/test" component={Test} />

        </Switch>
      </Router>

      <Footer />
    </React.Fragment>
  );
}

export default App;
