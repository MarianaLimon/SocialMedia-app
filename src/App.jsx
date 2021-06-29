import React, { useState } from "react";

import Footer from "./components/footer";
import { Icon } from '@iconify/react';
import doctorIcon from '@iconify/icons-vaadin/doctor';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Input from "./components/Input";
import AppCheckbox from "./screens/AppCheckbox";

function App() {
  return (

    <React.Fragment>

    <Router>
      <Route exact path="/checkbox">
          <AppCheckbox />
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
