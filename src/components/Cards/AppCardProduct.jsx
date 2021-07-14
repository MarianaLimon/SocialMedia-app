import React from "react";

// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import AppImage from "../commons/AppImage";
import AppPostDateCreation from "./AppPostDateCreation"

import Styles from "./AppCardProduct.module.css"

import banner from "../../img/card/banner-product.jpg"

export default function AppCardProduct({
  cardId,
  cardLink,
  cardCategory,
  cardName,
  cardImage,
  cardTags,
  sustance,
  formulation,
  terapeutic_indications,
  general_description,
  dose,
  cardDate,
  updatedate,
}) {

  return (
    <React.Fragment>


      <article className="col-6 col-lg-6 mb-4">

          <div className={`${Styles.CardProduct} card d-none d-md-block`}>

              <AppImage 
              classImage={`${Styles.CardImage} card-img-top`} 
              pathImage={cardImage ? cardImage : banner} 
              altImage="banner-img"></AppImage>

              <div className={`${Styles.CardBody} card-body`}>
                  {/* Title */}
                  <h2 className={`${Styles.CardTitle}`}>
                      <a href="#">{cardName ? cardName : "Title"}</a>
                  </h2>

                  {/* Tags */}
                  <div className={`${Styles.Tags} tags-color d-flex flex-wrap`}> 
                    {cardTags
                    ? cardTags.map((tag) => `#${tag} `)
                    : "#webdev #wordpress #frontend #tutorial"}{" "} 
                  </div>

                {/* Content */}
                <div className={`${Styles.PublishedContent}`}>
                    <p>{general_description ? general_description : "..."}</p>
                </div>

                  {/* Publication Date */}
                  <AppPostDateCreation cname="text-end"/>
              </div>
          </div>

          <div className="row">

            <div className="col-12">


              {/* Image Mobile */}
              <div className={`${Styles.Square} d-block d-md-none`}>
                <div className={`${Styles.Content}`}>
                    <img 
                    className={`${Styles.Rs}`} 
                    src={cardImage ? cardImage : banner}/>
                </div>
              </div>
            </div>

            <div className="col-12">
              {/* Title Mobile */}
              <h2 className={`${Styles.CardTitleMobile} d-block d-md-none`}>
                  <a href="#">{cardName ? cardName : "Title"}</a>
              </h2>
            </div>

          </div>
      </article>

    </React.Fragment>
  );
}
