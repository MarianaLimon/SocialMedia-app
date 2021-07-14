import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router";
import { useParams } from "react-router";
import { getArticleById } from "../../../services/articles";
import AppCardArticleDetail from "../../../components/Cards/AppCardArticleDetail";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Skeleton from "react-loading-skeleton";
import Icons from "../../../components/commons/icons";
import Styles from "../../../components/Cards/AppCardArticleDetail.module.css";

export default function ArticleDetail() {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  //const history = useHistory();

  useEffect(() => {
    const request = async (id_article) => {
      const jsonArticle = await getArticleById(id_article);
      setArticle(jsonArticle);
    };
    if (id) {
      request(id);
    }
  }, [id]);

  const buildSkeleton = () => {
    return (
      <article className="card mb-3">
        <Skeleton height={350} />
        <div className={`card-body ${Styles.CardBody}`}>
          {/* Title */}
          <h2 className={`${Styles.PublishedTitle}`}>
            <Skeleton />
          </h2>

          {/* Tags */}
          <div
            className={`${Styles.PublishedTags} tags-color d-flex flex-wrap`}
          >
            <Skeleton width={80} />
          </div>

          {/* Contenedor del avatar y el name */}
          <div className={`${Styles.AuthorWrapper}  py-2`}>
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

          {/* Content */}
          <div>
            <Skeleton count={10} />
          </div>

          {/* Reactions */}
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
        </div>{" "}
        {/* Fin del Card Body */}
        {/* /////////////////  Seccion Comments  ////////////// */}
        <div className={`${Styles.AuthorWrapper}  py-2`}>
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
        <div>
          <Skeleton count={2} />
        </div>
      </article>
    );
  };

  const buildArticle = (objectArticle) => {
    if (Object.entries(objectArticle).length) {
      const {
        category_id: category,
        content,
        creationdate,
        image,
        tags,
        title,
        user_id: userinfo,
        _id: id_article,
      } = objectArticle;

      return (
        <AppCardArticleDetail
          key={id_article}
          cardId={id_article}
          cardImage={image}
          cardTitle={title}
          cardAutor={`${userinfo.firstname} ${userinfo.lastname}`}
          cardAutorAvatar={userinfo.avatar_url}
          cardDate={creationdate}
          cardCategory={category}
          cardTags={tags}
          cardContent={content}
        />
      );
    }
    return <React.Fragment>{buildSkeleton()}</React.Fragment>;
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row my-3">
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-8">{buildArticle(article)}</div>
          <div className="col-12 col-md-2"></div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
