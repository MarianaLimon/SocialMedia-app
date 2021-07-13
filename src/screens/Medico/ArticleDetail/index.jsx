import React, { useState,useEffect } from "react";
//import { useHistory } from "react-router";
import { useParams } from "react-router";
import {getArticleById} from "../../../services/articles"
import AppCardArticleDetail from "../../../components/Cards/AppCardArticleDetail"
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function ArticleDetail() {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  //const history = useHistory();

  useEffect(() => {
    const request = async (id_article) => {
      const jsonArticle = await getArticleById(id_article);
      setArticle(jsonArticle);
    };
    if(id){
      request(id);  
    }
  }, [id]);

  const buildArticle = (objectArticle) => {
    console.log(objectArticle);
    if (Object.entries(objectArticle).length) {
       
      const { 
          category_id: category,
          content,
          creationdate,
          image,
          tags,
          title,
          user_id: userinfo,
          _id: id_article 
      }  = objectArticle;
      
      return(
      <AppCardArticleDetail
                    key={id_article}
                    cardId={id_article}
                    cardImage={image}
                    cardTitle={title}
                    cardAutor={`${userinfo.firstname} ${userinfo.lastname}`}
                    cardAutorAvatar={userinfo.avatar_url }
                    cardDate={creationdate}
                    cardCategory={category}
                    cardTags={tags}
                    cardContent={content}
                  />
      );
      
    }
    return <AppCardArticleDetail />;
  };

  return (
    <React.Fragment>
      <Header/>
      <div className="container">
          <div className="row my-3">
              <div className="col-12 col-md-2">
                
              </div>
              <div className="col-12 col-md-8">
                  {buildArticle(article)}
              </div>
              <div className="col-12 col-md-2"></div>
          </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}