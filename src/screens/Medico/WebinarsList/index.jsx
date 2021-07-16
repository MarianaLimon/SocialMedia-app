import React, { useState, useEffect } from "react";
import { getWebinars } from "../../../services/webinars";
import { getCategories } from "../../../services/categories";
import AppCardWebinar from "../../../components/Cards/AppCardWebinar";
import AppImage from "../../../components/commons/AppImage";
import filter from "../../../img/clarity_filter-solid.png";
import Styles from "./index.module.css";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Skeleton from "react-loading-skeleton";
import Icons from "../../../components/commons/icons";
import LeftMenuDoctor from "../../../components/LeftMenuDoctor";
import Filter from '../../../components/Filter'

export default function WebinarsList() {
  const [webinars, setWebinars] = useState([]);
  /*filter */
  const [filterWebinars, setFilterWebinars] = useState([])
  const [filterCategories, setFilterCategories] = useState(false)
  const [checkedValues, setCheckedValues] = useState([]);
  const [categories, setCategories] = useState([])
  const cvProps = { categories, checkedValues, setCheckedValues };

  /* filter*/

  useEffect(() => {
    const request = async () => {
      const jsonWebinars = await getWebinars();
      setWebinars(jsonWebinars);
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
      const jsonWebinars = await getWebinars();
      const webinars = []

      Object.entries(jsonWebinars).reverse().forEach((item, index) => {
        if (checkedValues.includes(item[1].category_id.name)) {
          webinars.push(jsonWebinars[item[0]])
        }
      })

      if (webinars.length) {
        setFilterCategories(true)
        setFilterWebinars(webinars)
      } else {
        setFilterCategories(false)
      }
    }
    request()

  }

  const buildSkeleton = (n) => {
    let Cards = [];
    n = !n ? (n = 1) : n;
    for (let i = 0; i < n; i++) {
      Cards.push(
        <article className="col-12 mb-4" key={i}>
          <div className={`${Styles.CardArticles} card p-3`}>
            <br></br>
            <h2 className={`${Styles.CardTitle}`}>
              <Skeleton />
            </h2>

            <div className={`${Styles.AuthorWrapper} d-flex py-2`}>
              <div className={`${Styles.AuthorData} w-100`}>
                <Skeleton circle={true} width={40} height={40} />
                <div className={`${Styles.AuthorName} w-100  `}>
                  <div>
                    <Skeleton width={300} />
                  </div>

                  {/* Publication Date */}
                  <div>
                    <Skeleton width={200} />
                  </div>
                </div>
              </div>
            </div>

            <Skeleton height={250} />

            <div className="card-body">
              <div className={`${Styles.Tags} tags-color d-flex flex-wrap`}>
                <Skeleton width={100} /> <Skeleton width={100} />
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

  const printWebinars = ([
    key,
    {
      category_id: category,
      duration,
      description,
      image,
      tags,
      title,
      datewebinar,
      video_url,
      user_id: userinfo,
      _id: id_webinar,
    },
  ]) => {
    return (
      <AppCardWebinar
        key={id_webinar}
        cardId={id_webinar}
        cardImage={image}
        cardTitle={title}
        cardLink={`/webinar-detail/${id_webinar}`}
        cardAutor={`${userinfo.firstname} ${userinfo.lastname}`}
        cardAutorAvatar={userinfo.avatar_url}
        cardDate={datewebinar}
        cardCategory={category.name}
        cardTags={tags}
        cardDescription={description}
        cardVideo={video_url}
        cardDuration={duration}
      />
    );
  };

  const buildWebinars = (arrayAWebinars) => {
    if (Object.entries(arrayAWebinars).length) {
      return Object.entries(arrayAWebinars).reverse().map(printWebinars);
    }
    return <React.Fragment>{buildSkeleton(3)}</React.Fragment>;
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
            <h1 className={`${Styles.TitleSection} mb-4`}>Webinars</h1>
            {filterCategories ? buildWebinars(filterWebinars) : buildWebinars(webinars)}
          </div>

          <div className={`${Styles.RightColumn} col-3 d-none d-lg-block`}>
            <div className="card p-3">
              <Filter {...cvProps} />
              <button onClick={handlerFilter} className={`btn text-center mt-3 ${Styles.Button}`}>Aplicar filtro</button>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}