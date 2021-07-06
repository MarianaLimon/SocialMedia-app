import React from "react";

// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import AppImage from "../commons/AppImage";
import AppPostDateCreation from "./AppPostDateCreation"

import Styles from "./AppCardProduct.module.css"

import banner from "../../img/card/banner-product.jpg"

export default function AppCardProduct() {

  return (
    <React.Fragment>

      <article className="col-6 col-lg-6 mb-4">


          <div className={`${Styles.CardProduct} card`}>


              <AppImage classImage={`${Styles.CardImage} card-img-top`} pathImage={banner} altImage="banner-img"></AppImage>

              <div className={`${Styles.CardBody} card-body`}>
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

          {/* Title Mobile */}
          <h2 className={`${Styles.CardTitleMobile}`}>
              <a href="#">Title</a>
          </h2>

      </article>

    </React.Fragment>
  );
}
