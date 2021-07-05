import React, { useState } from "react";
import AppCardProductDetail from "../components/commons/AppCardProductDetail"


export default function ProductDetail() {

  return (
    <React.Fragment>


      <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <AppCardProductDetail/>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
        
    </React.Fragment>
  );
}