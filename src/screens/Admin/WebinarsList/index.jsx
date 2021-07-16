import React, { useState } from "react";
import { getWebinars } from "../../../services/webinars";
import Icons from "../../../components/commons/icons";
import LeftMenu from "../../../components/LeftMenu";
import AppCheckbox from "../../../components/commons/AppCheckbox";
import AppButton from "../../../components/commons/AppButton";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";
import react from "react";

export default function WebinarsListAdmin() {
  const [webinars, setWebinars] = useState([])
  const history = useHistory()

  useEffect(() => {
    const request = async () => {
      const webinarsList = await getWebinars()
      //console.log(webinarsList)
      setWebinars(webinarsList);
    };

    request();
  })

  const printWebinars = ([
    key,
    {
      _id: idWebinar,
      title: title,
      user_id: user_id,
      image: image,
      video_url: video_url,
      description: description,
      datewebinar: datewebinar,
      duration: duration,
      category_id: category_id,
      creationdate: creationdate
    },
  ]) => {
    return (
      <React.Fragment key={idWebinar}>
        <tr>
          <th scope="row"><AppCheckbox /></th>
          <td>{`${title}`}</td>
          <td className="table-show">{`${category_id.name}`}</td>
          <td className="table-show">{`${duration}`}</td>
          <td className="table-show">{`${datewebinar}`}00/00/00</td>
          <td className="table-show">{`${creationdate}`}00/00/00</td>
          <th scope="col"><button className="btn-edit" onClick={() => { history.push(`/edit-webinar/${idWebinar}`) }}><Icons value={'edit'} /></button></th>
        </tr>
      </React.Fragment>


    );
  };

  const buildWebinars = (webinars) => {
    if (Object.entries(webinars).length) {
      return Object.entries(webinars).map(printWebinars);
    }

  };

  return (
    <React.Fragment>
      <Header />
      <div className="container my-4">
        <div className="row content-row">
          <div className="col-lg-2">
            <LeftMenu />
          </div>
          <div className="col-lg-10">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-auto pb-0 pb-lg-3 mb-lg-4">
              <h1 className="mt-3 title-sections">
                <b>Webinars</b>
              </h1>
              <button className="aqua newArticle mt-1 mt-lg-3 mb-1 btn button" type="submit" text="+ Nuevo Webinars" onClick={() => { history.push('/add-webinar') }}>+ Nuevo Webinars</button>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"><Icons value={'delete'} /></th>
                  <th scope="col"><span className="table-show">Título</span></th>
                  <th scope="col" className="table-show">Categoría</th>
                  <th scope="col" className="table-show">Duración</th>
                  <th scope="col" className="table-show">Publicación</th>
                  <th scope="col" className="table-show">Actualización</th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
                {buildWebinars(webinars)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}