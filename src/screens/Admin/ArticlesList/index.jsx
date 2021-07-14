import React, { useState } from "react";
import Icons from "../../../components/commons/icons";
import LeftMenu from "../../../components/LeftMenu";
import AppCheckbox from "../../../components/commons/AppCheckbox";
import AppButton from "../../../components/commons/AppButton";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function ArticlesListAdmin() {

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
                <b>Artículos</b> 
              </h1>
              <AppButton classButton="aqua newArticle mt-1 mt-lg-3 mb-1"  type="submit" text="+ Nuevo Artículo" />
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"><Icons value={'delete'}/></th>
                  <th scope="col"><span className="table-show">Título</span></th>
                  <th scope="col" className="table-show">Categoría</th>
                  <th scope="col" className="table-show">Estatus</th>
                  <th scope="col" className="table-show">Publicación</th>
                  <th scope="col" className="table-show">Actualizacion</th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Artículo 1</td>
                  <td className="table-show">Categoria 1</td>
                  <td className="table-show">Publicado</td>
                  <td className="table-show">00/00/00</td>
                  <td className="table-show">00/00/00</td>
                  <th scope="col"><button className="btn-edit"><Icons value={'edit'}/></button></th>
                </tr>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Artículo 2</td>
                  <td className="table-show">Categoria 2</td>
                  <td className="table-show">Pendiente</td>
                  <td className="table-show">00/00/00</td>
                  <td className="table-show">00/00/00</td>
                  <th scope="col"><button className="btn-edit"><Icons value={'edit'}/></button></th>
                </tr>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Artículo 3</td>
                  <td className="table-show">Categoria 3</td>
                  <td className="table-show">Publicado</td>
                  <td className="table-show">00/00/00</td>
                  <td className="table-show">00/00/00</td>
                  <th scope="col"><button className="btn-edit"><Icons value={'edit'}/></button></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>     
      </div>
      <Footer />
    </React.Fragment>
  );
}