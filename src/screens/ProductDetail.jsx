import React, { useState } from "react";
import AppCardProductDetail from "../components/commons/AppCardProductDetail"


export default function ProductDetail() {

  return (
    <React.Fragment>

      <div className="container">
          <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-8">
                  <AppCardProductDetail/>
              </div>
              <div className="col-12 col-md-2"></div>
          </div>
      </div>

    </React.Fragment>
  );
}