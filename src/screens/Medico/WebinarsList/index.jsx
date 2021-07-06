import React, { useState } from "react";
import AppCardWebinar from "../../../components/Cards/AppCardWebinar"


export default function WebinarsList() {

  return (
    <React.Fragment>

      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
              <AppCardWebinar/>
              <AppCardWebinar/>
              <AppCardWebinar/>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

    </React.Fragment>
  );
}