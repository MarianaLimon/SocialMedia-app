import React, { useState } from "react";
import AppCardArticle from "../../../components/Cards/AppCardArticle"


export default function ArticlesList() {

  return (
    <React.Fragment>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-8">
              <AppCardArticle/>
              <AppCardArticle/>
              <AppCardArticle/>
          </div>
          <div className="col-12 col-md-2"></div>
        </div>
      </div>

    </React.Fragment>
  );
}