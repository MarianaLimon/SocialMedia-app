import React, { useState, useEffect } from "react";

import { getProducts } from "../../../services/products";
import { getCategories } from "../../../services/categories";
import AppCardProduct from "../../../components/Cards/AppCardProduct"
import AppImage from "../../../components/commons/AppImage"
import filter from "../../../img/clarity_filter-solid.png"
import Styles from "./index.module.css"
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftMenuDoctor from "../../../components/LeftMenuDoctor";
import Skeleton from "react-loading-skeleton";
import Icons from "../../../components/commons/icons";
import Filter from '../../../components/Filter'

export default function ProductsList() {

  const [products, setProducts] = useState([]);
  /*filter */
  const [filterProducts, setFilterProducts] = useState([])
  const [filterCategories, setFilterCategories] = useState(false)
  const [checkedValues, setCheckedValues] = useState([]);
  const [categories, setCategories] = useState([])
  const cvProps = { categories, checkedValues, setCheckedValues };

  /* filter*/
  useEffect(() => {
    const request = async () => {
      const jsonProducts = await getProducts();
      setProducts(jsonProducts);
    };
    /*filter */
    const requestCategories = async () => {
      const jsonCategories = await getCategories()
      const newCategories = Object.values(jsonCategories).map(item => item.name)
      setCategories(newCategories)
    }
    request();
    requestCategories()//filter
  }, []);
  const handlerFilter = () => {

    const request = async () => {
      const json = await getProducts();
      const products = []

      Object.entries(json).reverse().forEach((item, index) => {
        if (checkedValues.includes(item[1].category_id.name)) {
          products.push(json[item[0]])
        }
      })

      if (products.length) {
        setFilterCategories(true)
        setFilterProducts(products)
      } else {
        setFilterCategories(false)
      }
    }
    request()

  }
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

  const buildSkeleton = (n) => {
    let Cards = [];
    n = !n ? (n = 1) : n;
    for (let i = 0; i < n; i++) {
      Cards.push(
        <article className="col-6 mb-4" key={i}>

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
                <Skeleton count={10} />
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


  const buildProducts = (arrayProducts) => {
    if (Object.entries(arrayProducts).length) {
      return Object.entries(arrayProducts).reverse().map(printProducts);
    }
    return <React.Fragment>{buildSkeleton(4)}</React.Fragment>;
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container pb-5">
        <div className="row">
          <div className="col-12">
            <AppImage
              classImage={`${Styles.FilterImage}`}
              pathImage={filter}
              altImage="filter-img"
            ></AppImage>
          </div>
        </div>
        <div className="row">

          <div className="col-2 d-none d-md-block col-md-3 col-lg-2 mt-4">
            <LeftMenuDoctor />
          </div>

          <div className="col-12 col-md-9 col-lg-7 px-lg-3">
            <div className="container px-0">
              <div className="row">
                <h1 className={`${Styles.TitleSection} mb-4`}>Productos</h1>
                {filterCategories ? buildProducts(filterProducts) : buildProducts(products)}
              </div>
            </div>
          </div>
          <div className={`${Styles.RightColumn} col-3 d-none d-md-block`}>
            <div className="card p-3">
              <Filter {...cvProps} />
              <button onClick={handlerFilter} className="btn text-center">Aplicar filtro</button>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

