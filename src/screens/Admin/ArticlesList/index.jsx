import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Icons from "../../../components/commons/icons";
import LeftMenu from "../../../components/LeftMenu";
import AppCheckbox from "../../../components/commons/AppCheckbox";
import AppButton from "../../../components/commons/AppButton";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import AppModal from "../../../components/commons/AppModal";
import { getArticles, deleteArticle } from "../../../services/articles";
import { getDateFormatAdmin } from "../../../utils/functions";

export default function ArticlesListAdmin() {
  const [articles, setArticles] = useState([]);
  const history = useHistory();
  const [checkedValues, setCheckedValues] = useState([]);
  const [show, setShow] = useState(false); //Modal
  const [deleteArticles, setDeleteArticles] = useState(false);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    const jsonArticles = await getArticles();
    setArticles(jsonArticles);
  };

  const handlerDelete = () => {
    const response = async () => {
      if (checkedValues.length) {
        checkedValues.forEach(async (article) => {
          await deleteArticle(article);
        });
        request();
        setDeleteArticles(true);
      }
    };
    response();
  };

  const questionDelete = () => {
    if (checkedValues.length) setShow(true);
  };
  const handleChecked = (e) => {
    const idArticle = e.target.dataset.id;
    const newCheckedValues = checkedValues.filter((item) => item !== idArticle);

    if (e.target.checked) {
      newCheckedValues.push(e.target.dataset.id);
    }
    setCheckedValues(newCheckedValues);
  };

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
      _id: idArticle,
    },
  ]) => {
    return (
      <tr key={idArticle}>
        <th scope="row">
          <AppCheckbox dataID={idArticle} onClick={handleChecked} />
        </th>
        <td>{title}</td>
        <td className="d-lg-block d-none">
          {getDateFormatAdmin(creationdate)}
        </td>
        <th scope="col">
          <button
            className={`btn-validate`}
            onClick={() => {
              history.push(`/edit-article/${idArticle}`);
            }}
          >
            <Icons value={"edit"} />
          </button>
        </th>
      </tr>
    );
  };

  const buildArticles = (articles) => {
    if (Object.entries(articles).length) {
      return Object.entries(articles).map(printArticles);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <AppModal
        title=""
        onClose={() => {
          setShow(false);
        }}
        onClick={() => {
          handlerDelete();
          setShow(false);
        }}
        show={show}
      >
        <p className="text-center">
          ¿Desea eliminar los webinars seleccionados?
        </p>
      </AppModal>
      <div className="container my-4">
        <div className="row content-row">
          <div className="col-lg-2">
            <LeftMenu />
          </div>
          <div className="col-lg-10">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-auto pb-0 pb-lg-3 mb-lg-4">
              <h1 className="mt-3 title-sections">
                <b>Artículos</b>
              </h1>
              <AppButton
                classButton="aqua newArticle mt-1 mt-lg-3 mb-1"
                onClick={() => {
                  history.push("/add-article");
                }}
                text="+ Nuevo Artículo"
              />
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">
                    <div onClick={questionDelete}>
                      <Icons value={"delete"} />
                    </div>
                  </th>
                  <th scope="col">
                    <span className="table-show">Título</span>
                  </th>
                  <th scope="col" className="d-lg-block d-none">
                    Publicación
                  </th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
                {deleteArticles
                  ? buildArticles(articles)
                  : buildArticles(articles)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
