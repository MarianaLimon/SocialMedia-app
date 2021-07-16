import React, { useState, useEffect } from "react";
import { getWebinars } from "../../../services/webinars";
import Icons from "../../../components/commons/icons";
import LeftMenu from "../../../components/LeftMenu";
import AppCheckbox from "../../../components/commons/AppCheckbox";
import AppButton from "../../../components/commons/AppButton";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { getDateFormatAdmin } from '../../../utils/functions'
import { useHistory } from "react-router";

export default function WebinarsListAdmin() {
  const [webinars, setWebinars] = useState([]);
  const history = useHistory()

  useEffect(() => {
    const request = async () => {
      const WebinarsList = await getWebinars();
      setWebinars(WebinarsList);
    };

    request();
  }, []);

  const printWebinars = ([
    key,
    {
      _id: idWebinar,
      title,
      datewebinar,
      duration,
      category_id,
      creationdate
    },
  ]) => {
    return (
      <React.Fragment key={idWebinar}>
        <tr>
          <th scope="row"><AppCheckbox /></th>
          <td>{`${title}`}</td>
          <td className="d-lg-block d-none">{`${category_id.name}`}</td>
          <td className="">{`${duration}`}</td>
          <td className="">{`${getDateFormatAdmin(datewebinar)}`}</td>
          <td className="">{`${getDateFormatAdmin(creationdate)}`}</td>
          <th scope="col"><button className={`btn-validate`} onClick={() => { history.push(`/edit-webinar/${idWebinar}`) }}><Icons value={'edit'} /></button></th>
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
              <AppButton classButton="aqua newArticle mt-1 mt-lg-3 mb-1" type="submit" text="+ Nuevo Webinar" onClick={() => { history.push("/add-webinar") }} />
            </div>
            <table className="table table-striped">
              <thead>
                <tr key="webinars1">
                  <th scope="col"><Icons value={'delete'} /></th>
                  <th scope="col"><span className="table-show">Título</span></th>
                  <th scope="col" className="">Categoría</th>
                  <th scope="col" className="">Duración</th>
                  <th scope="col" className="">Publicación</th>
                  <th scope="col" className="">Actualizacion</th>
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