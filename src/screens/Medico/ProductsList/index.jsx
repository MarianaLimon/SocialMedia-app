import React, { useState } from "react";
import AppCardProduct from "../../../components/commons/AppCardProduct"


export default function ProductsList() {

  return (
    <React.Fragment>

      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="row ">
                <AppCardProduct/>
                <AppCardProduct/>
                <AppCardProduct/>              
            </div>

          </div>
          <div className="col-2"></div>
        </div>
      </div>

    </React.Fragment>
  );
}