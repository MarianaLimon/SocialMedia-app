import React, { useState,useEffect } from "react";

import { useParams } from "react-router";
import {getProductById} from "../../../services/products"

import AppCardProductDetail from "../../../components/Cards/AppCardProductDetail"
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftMenuDoctor from "../../../components/LeftMenuDoctor";

import Styles from "./index.module.css"
import Skeleton from "react-loading-skeleton";
import Icons from "../../../components/commons/icons";

export default function ProductDetail() {

  const [product, setProduct] = useState({});
  const { id } = useParams();
  //const history = useHistory();

  useEffect(() => {
    const request = async (id_product) => {
      const jsonProduct = await getProductById(id_product);
      setProduct(jsonProduct);
    };
    if(id){
      request(id);  
    }
  }, [id]);


  const buildSkeleton = (n) => {
    let Cards = [];
    n = !n ? (n = 1) : n;
    for (let i = 0; i < n; i++) {
      Cards.push(
        <article className="col-12 mb-4" key={i}>
        
          <div className={`${Styles.CardArticles} card`}>
            <Skeleton height={250} />

            <div className="card-body">
              <h2 className={`${Styles.CardTitle}`}>
                <Skeleton />
              </h2>

              <div className={`${Styles.Tags} tags-color d-flex flex-wrap`}>
                <Skeleton width={100} /> <Skeleton width={100} />
              </div>

              <div className={`${Styles.PublishedContent}  py-2`}>
                <Skeleton count={30} />
              </div>

              <div className={`${Styles.Reactions}`}>
                <div className={`${Styles.ReactionsWrapper}`}>
                  <Icons value="likes" />
                  <span>0</span>
                  <span className={`${Styles.ReactionsText}`}>Likes</span>{" "}
                  <Icons value="comments" />
                  <span>0</span>
                  <span className={`${Styles.ReactionsText}`}>Comments</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    }
    return <React.Fragment>{Cards}</React.Fragment>;
  };



  const buildProduct = (objectProduct) => {
    console.log(objectProduct);
    if (Object.entries(objectProduct).length) {
       
      const { 
        name,
        image,
        tags,
        sustance,
        presentation_id: presentation,
        category_id: category,
        formulation,
        terapeutic_indications,
        general_description,
        dose,
        creationdate,
        updatedate,
        _id: id_product,
      }  = objectProduct;
      
      return(
        <AppCardProductDetail
            key={id_product}
            cardId={id_product}
            cardLink={`/product-detail/${id_product}`}
            cardCategory={category.name}

            cardName={name}
            cardImage={image}
            cardTags={tags}
            sustance={sustance}
            formulation={formulation}
            terapeutic_indications={terapeutic_indications}
            general_description={general_description}
            dose={dose}
            cardDate={creationdate}
            updatedate={updatedate}
          />
        );
        
      }
      return <React.Fragment>{buildSkeleton()}</React.Fragment>;
    };

  return (
    <React.Fragment>
      <Header />
      <div className="container">
          <div className="row">
              <div className="col-12 col-md-2"><LeftMenuDoctor /></div>
              <div className="col-12 col-md-8 mt-4">
                  {buildProduct(product)}
                  {/* <AppCardProductDetail/> */}
              </div>
              <div className="col-12 col-md-2"><LeftMenuDoctor /></div>
          </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}