import React, { useState, useEffect } from "react";
import { getArticles } from "../../../services/articles";
import AppCardArticle from "../../../components/Cards/AppCardArticle";
import AppImage from "../../../components/commons/AppImage";
import filter from "../../../img/clarity_filter-solid.png";
import Styles from "./index.module.css";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Skeleton from "react-loading-skeleton";
import Icons from "../../../components/commons/icons";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const request = async () => {
      const jsonArticles = await getArticles();
      setArticles(jsonArticles);
    };

    request();
  }, []);

  const printArticles = ([
    key,
    {
      category_id: category,
      content,
      creationdate,
      enabled,
      image,
      tags,
      title,
      updatedate,
      user_id: userinfo,
      _id: id_article,
    },
  ]) => {
    return (
      <AppCardArticle
        key={id_article}
        cardId={id_article}
        cardImage={image}
        cardTitle={title}
        cardLink={`/article-detail/${id_article}`}
        cardAutor={`${userinfo.firstname} ${userinfo.lastname}`}
        cardAutorAvatar={userinfo.avatar_url}
        cardDate={creationdate}
        cardCategory={category.name}
        cardTags={tags}
      />
    );
  };

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

  const buildArticles = (arrayArticles) => {
    if (Object.entries(arrayArticles).length) {
      return Object.entries(arrayArticles).reverse().map(printArticles);
    }
    return <React.Fragment>{buildSkeleton(3)}</React.Fragment>;
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

        <h1 className={`${Styles.TitleSection}`}>Articles</h1>
        <div className="row">{buildArticles(articles)}</div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
