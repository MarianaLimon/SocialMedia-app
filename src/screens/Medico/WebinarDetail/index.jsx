import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import { getWebinarById } from "../../../services/webinars";
import AppCardWebinarDetail from "../../../components/Cards/AppCardWebinarDetail";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function WebinarDetail() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const request = async (id_article) => {
      const jsonWebinar = await getWebinarById(id_article);
      console.log(jsonWebinar);
      setData(jsonWebinar);
    };
    if (id) {
      request(id);
    }
  }, [id]);

  const buildWebinar = (objectWebinar) => {
    console.log(objectWebinar);
    if (Object.entries(objectWebinar).length) {
      const {
        category_id: category,
        description,
        datewebinar,
        image,
        video_url,
        tags,
        title,
        duration,
        user_id: userinfo,
        _id: id_webinar,
      } = objectWebinar;

      return (
        <AppCardWebinarDetail
          key={id_webinar}
          cardId={id_webinar}
          cardImage={image}
          cardTitle={title}
          cardAutor={`${userinfo.firstname} ${userinfo.lastname}`}
          cardAutorAvatar={userinfo.avatar_url}
          cardDate={datewebinar}
          cardCategory={category}
          cardTags={tags}
          cardContent={description}
          cardVideo={video_url}
          cardDuration={duration}
        />
      );
    }
    return <AppCardWebinarDetail />;
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row  my-3">
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-8">{buildWebinar(data)}</div>
          <div className="col-12 col-md-2"></div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
