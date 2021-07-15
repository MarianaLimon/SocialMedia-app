import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import { getWebinarById } from "../../../services/webinars";
import AppCardWebinarDetail from "../../../components/Cards/AppCardWebinarDetail";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Icons from "../../../components/commons/icons";
import Skeleton from "react-loading-skeleton";

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

  const buildSkeleton = () => {
    return (
      <article className="col-12 mb-4">
        <div className={` card p-3`}>
          <Skeleton height={250} />

          <div className="card-body">
            <h2>
              <Skeleton />
            </h2>
            <div className={`tags-color d-flex flex-wrap`}>
              <Skeleton width={100} /> <Skeleton width={100} />
            </div>

            <div className={`d-flex py-2`}>
              <div className={`w-100`}>
                <Skeleton circle={true} width={40} height={40} />
                <div className={`w-100  `}>
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

            <div>
              <div>
                <Icons value="likes" />
                <span>{" 0 "} </span> <span>Likes </span>{" "}
                <Icons value="comments" /> <span>{" 0 "}</span>{" "}
                <span>Comments</span>
              </div>
            </div>
          </div>

          <div className={`py-2`}>
            <div className={`w-100`}>
              <Skeleton circle={true} width={40} height={40} />
              <div className={`w-100  `}>
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

          <div>
            <Skeleton count={5} />
          </div>
          <div className={`py-2`}>
            <div className={`w-100`}>
              <Skeleton circle={true} width={40} height={40} />
              <div className={`w-100  `}>
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

          <div>
            <Skeleton count={3} />
          </div>
        </div>
      </article>
    );
  };

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
    return <React.Fragment>{buildSkeleton()}</React.Fragment>;
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
