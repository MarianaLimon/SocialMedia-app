import React, { useState, useEffect } from "react";
import banner from "../../../img/home-banner.png"
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
  
  return (
    <React.Fragment>
      <Header />
      <div className="container my-4 content-row">
        <div className="row">
          <div className="col-12">
            <img src={banner} alt="" className="w-100 }" />
            <p className="text-center my-4"><b>Bienvenido Dr. {`${stateUser.firstname} ${stateUser.lastname}` || <Skeleton width={300}/>}</b></p>
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