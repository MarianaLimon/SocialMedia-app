import React, { useState } from "react";
import AppCardWebinarDetail from "../components/commons/AppCardWebinarDetail"


export default function WebinarDetail() {

  return (
    <React.Fragment>

        <div className="container">
            <div className="row">
                <div className="col-12 col-md-2"></div>
                <div className="col-12 col-md-8">
                    <AppCardWebinarDetail/>
                </div>
                <div className="col-12 col-md-2"></div>
            </div>
        </div>

    </React.Fragment>
  );
}