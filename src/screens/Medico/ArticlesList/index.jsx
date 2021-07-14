import React, { useState, useEffect } from "react";
import { getArticles } from "../../../services/articles";
import AppCardArticle from "../../../components/Cards/AppCardArticle";
import AppImage from "../../../components/commons/AppImage";
import filter from "../../../img/clarity_filter-solid.png";
import Styles from "./index.module.css";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

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

  const buildArticles = (arrayArticles) => {
    if (Object.entries(arrayArticles).length) {
      return Object.entries(arrayArticles).reverse().map(printArticles);
    }
    return <AppCardArticle />;
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
