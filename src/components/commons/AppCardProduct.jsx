import React from "react";

import Icons from "./icons";

// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import AppImage from "./AppImage";
import AppPostDateCreation from "./AppPostDateCreation"

import Styles from "./AppCardProduct.module.css"

import banner from "../../img/card/banner-product.jpg"

export default function AppCardProduct() {

  return (
    <React.Fragment>

      <article className="col-12 col-lg-6 mb-4">


          <div className={`${Styles.CardProduct} card`}>
              <AppImage classImage={`${Styles.CardImage} card-img-top w-100`} pathImage={banner} altImage="banner-img"></AppImage>

              <div className="card-body">
                  {/* Title */}
                  <h2 className={`${Styles.CardTitle}`}>
                      <a href="#">Title</a>
                  </h2>

                  {/* Tags */}
                  <div className={`${Styles.Tags} tags-color d-flex flex-wrap`}> #webdev #wordpress #frontend #tutorial </div>

                {/* Content */}
                <div className={`${Styles.PublishedContent}`}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores perferendis beatae perspiciatis facilis! Rem, mollitia nesciunt assumenda vel magni doloremque fuga iste quis sunt sequi expedita ratione quos laborum.</p>
                </div>

                  {/* Publication Date */}
                  <AppPostDateCreation cname="text-end"/>
              </div>
          </div>

     
      </article>

    </React.Fragment>
  );
}
