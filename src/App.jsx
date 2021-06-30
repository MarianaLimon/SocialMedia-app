import React from "react";

import Footer from "./components/footer";
import Icons from "./components/commons/icons";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CheckboxScreen from "./screens/CheckboxScreen";
import Test from "./screens/Test.js";

function App() {
  return (
    <React.Fragment>
      <Icons value={"doctor"} />
      <Icons value={"home"} />

      <Router>
        <Switch>
          <Route exact path="/checkbox">
            <CheckboxScreen />
          </Route>
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>

      <div className="App">
        <p>Holiiiii</p>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
