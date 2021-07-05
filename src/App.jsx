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
