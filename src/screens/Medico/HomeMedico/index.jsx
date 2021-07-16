import React, { useState, useEffect } from "react";
import banner from "../../../img/home-banner4.png"
import Icons from "../../../components/commons/icons";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { getUserById } from "../../../services/users";
import { useHistory } from "react-router";
import { whois } from "../../../utils/functions"
import Skeleton from "react-loading-skeleton";
import "./index.css"

export default function HomeDoctor() {
  const history = useHistory()
  const [stateUser, setStateUser] = useState({}) 
  useEffect(() => {
    const request = async () => {
      const user = whois()
      const json = await getUserById(user.id)
      console.log(json);
      setStateUser(json)
    }
    request()
  },[])
  

  const buildSkeleton = () => {
    return (
      <article className="card mb-3">
        <Skeleton height={250} />
        <div className={`card-body`}>
          {/* Title */}
          <h2>
            <Skeleton />
          </h2>
          {/* Contenedor del avatar y el name */}
          <div className={`  py-2 container`}>
            <div className={` w-100 col-12 row`}>
              <div className={`col-4 `}>
                  <Skeleton height={300} />
              </div>
              <div className={`col-4 `}>
                  <Skeleton height={300} />
              </div>
              <div className={`col-4 `}>
                  <Skeleton height={300} />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Fin del Card Body */}
      </article>
    );
  };

  const buildArticle = () => {
    return (
      <React.Fragment>{buildSkeleton()}</React.Fragment>
    )
  }


  return (
    <React.Fragment>
      <Header />
      <div className="container my-4 content-row">
        <div className="row">
          <div className="col-12">
            <img src={banner} alt="" className="w-100 }" />
            <p className="text-center my-4 welcome-text"><b>Bienvenido Dr. {`${stateUser.firstname} ${stateUser.lastname}` || <Skeleton width={300}/>}</b></p>
          </div>
        </div>
        <div className="row icons-home mt-4">
          <div className="col-6 col-md-4">
            <button className="btn-menu" onClick={() => { history.push("/products") }}>
              <Icons value={'products'} />
              <p className="icon-label pb-lg-0">Productos</p>
            </button>
          </div>
          <div className="col-6 col-md-4">
            <button className="btn-menu" onClick={() => { history.push("/articles") }}>
              <Icons value={'articles'} />
              <p className="icon-label">Artículos</p>
            </button>
          </div>
          <div className="col-12 col-md-4">
            <button className="btn-menu" onClick={() => { history.push("/webinars") }}>
              <Icons value={'webinars'} />
              <p className="icon-label">Webinars</p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}