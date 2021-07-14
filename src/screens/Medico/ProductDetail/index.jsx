import React, { useState,useEffect } from "react";

import { useParams } from "react-router";
import {getProductById} from "../../../services/products"

import AppCardProductDetail from "../../../components/Cards/AppCardProductDetail"
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";


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
      return <AppCardProductDetail />;
    };

  return (
    <React.Fragment>
      <Header />
      <div className="container">
          <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-8">
                  {buildProduct(product)}
                  {/* <AppCardProductDetail/> */}
              </div>
              <div className="col-12 col-md-2"></div>
          </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}