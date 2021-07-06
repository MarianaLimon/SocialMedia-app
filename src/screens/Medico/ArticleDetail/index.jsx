import React, { useState } from "react";
import AppCardArticleDetail from "../../../components/commons/AppCardArticleDetail"


export default function ArticleDetail() {

  return (
    <React.Fragment>

        <div className="container">
            <div className="row">
                <div className="col-12 col-md-2"></div>
                <div className="col-12 col-md-8">
                    <AppCardArticleDetail/>
                </div>
                <div className="col-12 col-md-2"></div>
            </div>
        </div>

    </React.Fragment>
  );
}