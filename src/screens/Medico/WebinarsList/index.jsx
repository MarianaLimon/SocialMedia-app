import React, { useState,useEffect } from "react";
import {getWebinars} from "../../../services/webinars"
import AppCardWebinar from "../../../components/Cards/AppCardWebinar"
import AppImage from "../../../components/commons/AppImage"
import filter from "../../../img/clarity_filter-solid.png"
import Styles from "./index.module.css"
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LeftMenuDoctor from "../../../components/LeftMenuDoctor";

export default function WebinarsList() {

  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    const request = async () => {
      const jsonWebinars = await getWebinars();
      setWebinars(jsonWebinars);
    };

    request();
  }, []);

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
    return <AppCardWebinar/>;
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
          <div className="col-2 d-none d-md-block mt-4">
            <LeftMenuDoctor />
          </div>
          <div className="col-12 col-md-8 px-lg-5">
            <h1 className={`${Styles.TitleSection} mb-4`}>Webinars</h1>
            {buildWebinars(webinars)}
          </div>
          <div className="col-2 d-none d-md-block mt-4">
            <LeftMenuDoctor />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}