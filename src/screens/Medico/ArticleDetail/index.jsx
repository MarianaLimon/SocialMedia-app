import React, { useState } from "react";
import AppCardArticleDetail from "../../../components/Cards/AppCardArticleDetail"
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function ArticleDetail() {

  return (
    <React.Fragment>
      <Header />
      <div className="container">
          <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-8">
                  <AppCardArticleDetail/>
              </div>
              <div className="col-12 col-md-2"></div>
          </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}