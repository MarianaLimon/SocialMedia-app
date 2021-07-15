import React, { useState, useEffect } from "react";

import { getProducts } from "../../../services/products";

import AppCardProduct from "../../../components/Cards/AppCardProduct"
import AppImage from "../../../components/commons/AppImage"
import filter from "../../../img/clarity_filter-solid.png"
import Styles from "./index.module.css"
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function ProductsList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const request = async () => {
      const jsonProducts = await getProducts();
      setProducts(jsonProducts);
    };

    request();
  }, []);

  const printProducts = ([
    key,
    {
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
    },
  ]) => {
    return (
      <AppCardProduct
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
  };

  const buildProducts = (arrayProducts) => {
    if (Object.entries(arrayProducts).length) {
      return Object.entries(arrayProducts).reverse().map(printProducts);
    }
    return <AppCardProduct />;
  };

  return (
    <React.Fragment>
      <Header />
      <div className="col-12 container">

      <AppImage 
      classImage={`${Styles.FilterImage}`} 
      pathImage={filter} 
      altImage="filter-img"
      ></AppImage>

      <h1 className={`${Styles.TitleSection}`}>Productos</h1>
        {/* <div className="row ">
            <AppCardProduct/>
            <AppCardProduct/>
            <AppCardProduct/>              
        </div> */}
        <div className="row">{buildProducts(products)}</div>
      </div>
      <Footer />
    </React.Fragment>
  );
}