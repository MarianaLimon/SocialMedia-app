import React, { useState, useEffect } from "react";
import { getWebinars, deleteWebinar } from "../../../services/webinars";
import Icons from "../../../components/commons/icons";
import LeftMenu from "../../../components/LeftMenu";
import AppCheckbox from "../../../components/commons/AppCheckbox";
import AppButton from "../../../components/commons/AppButton";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { getDateFormatAdmin } from '../../../utils/functions'
import { useHistory } from "react-router";

import AppModal from "../../../components/commons/AppModal"

export default function WebinarsListAdmin() {
  const [webinars, setWebinars] = useState([]);
  const [checkedValues, setCheckedValues] = useState([]);
  const [show, setShow] = useState(false);//Modal
  const [deleteWebinars, setDeleteWebinars] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const request = async () => {
      const WebinarsList = await getWebinars();
      setWebinars(WebinarsList);
    };

    request();
  }, []);

  const handlerDelete = () => {


    const response = async () => {
      if (checkedValues.length) {
        //podemos eliminar
        checkedValues.forEach(async (webinar) => {

          await deleteWebinar(webinar)
        })
        const jsonWebinars = await getWebinars()
        setWebinars(jsonWebinars)
        setDeleteWebinars(true)

      }

    };
    response();
  }

  const questionDelete = () => {
    if (checkedValues.length)
      setShow(true);
  }
  const handleChecked = e => {
    const idWebinar = e.target.dataset.id
    const newCheckedValues = checkedValues.filter(item => item !== idWebinar);

    if (e.target.checked) {
      newCheckedValues.push(e.target.dataset.id)
    }
    setCheckedValues(newCheckedValues)
  }

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
          <th scope="row"><AppCheckbox dataID={idWebinar} onClick={handleChecked} /></th>
          <td>{`${title}`}</td>
          <td className="d-lg-block d-none table-show">{`${category_id.name}`}</td>
          <td className="table-show">{`${duration}`}</td>
          <td className="table-show">{`${getDateFormatAdmin(datewebinar)}`}</td>
          <td className="table-show">{`${getDateFormatAdmin(creationdate)}`}</td>
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
      <AppModal
        title=""
        onClose={() => {
          setShow(false);
        }}
        onClick={() => {
          handlerDelete()
          setShow(false);
        }}
        show={show}>
        <p className="text-center">¿Desea eliminar los webinars seleccionados?</p>
      </AppModal>
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
              <AppButton classButton="aqua newArticle mt-1 mt-lg-3 mb-1" text="+ Nuevo Webinar" onClick={() => { history.push("/add-webinar") }} />
            </div>
            <table className="table table-striped">
              <thead>
                <tr key="webinars1">
                  <th scope="col"><div onClick={questionDelete}><Icons value={'delete'} /></div></th>
                  <th scope="col"><span className="table-show">Título</span></th>
                  <th scope="col" className="table-show">Categoría</th>
                  <th scope="col" className="table-show">Duración</th>
                  <th scope="col" className="table-show">Publicación</th>
                  <th scope="col" className="table-show">Actualizacion</th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
                {deleteWebinars ? buildWebinars(webinars) : buildWebinars(webinars)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}