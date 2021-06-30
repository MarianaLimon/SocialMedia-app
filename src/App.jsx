import React from "react";

import Footer from "./components/footer";
import Icons from "./components/commons/icons";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CheckboxScreen from "./screens/CheckboxScreen";

function App() {
  return (
    <React.Fragment>
      <Icons value={'doctor'}/>
      <Icons value={'home'}/>

      <Router>
        <Route exact path="/checkbox">
            <CheckboxScreen />
        </Route>        
      </Router>

      <div className="App">
        <p>Holiiiii</p>
        <Icon icon={doctorIcon} className='icon-left-menu' />

        <Footer />
      </div>
      
    </React.Fragment>
  );
}

export default App;
