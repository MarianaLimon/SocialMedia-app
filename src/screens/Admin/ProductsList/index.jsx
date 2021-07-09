import React, { useState } from "react";
import Icons from "../../../components/commons/icons";
import LeftMenu from "../../../components/LeftMenu";
import AppCheckbox from "../../../components/commons/AppCheckbox";
import AppButton from "../../../components/commons/AppButton";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import "./index.css"

export default function ProductsListAdmin() {

  return (
    <React.Fragment>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-2">
            <LeftMenu />
          </div>
          <div className="col-lg-10">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-auto pb-0 pb-lg-3 mb-lg-4">
              <h1 className="mt-3 title-sections">
                <b>Productos</b> 
              </h1>
              <AppButton classButton="aqua newArticle mt-1 mt-lg-3 mb-1"  type="submit" text="+ Nuevo Webinar" />
            </div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col"><Icons value={'delete'}/></th>
                  <th scope="col"><span className="table-show">Título</span></th>
                  <th scope="col" className="table-show">Sustancia</th>
                  <th scope="col" className="table-show">Formula</th>
                  <th scope="col" className="table-show">Publicación</th>
                  <th scope="col" className="table-show">Actualizacion</th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Producto 1</td>
                  <td className="table-show">Su sustancia</td>
                  <td className="table-show">Su formula</td>
                  <td className="table-show">00/00/00</td>
                  <td className="table-show">00/00/00</td>
                  <th scope="col"><button className="btn-edit"><Icons value={'edit'}/></button></th>
                </tr>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Producto 1</td>
                  <td className="table-show">Su sustancia</td>
                  <td className="table-show">Su formula</td>
                  <td className="table-show">00/00/00</td>
                  <td className="table-show">00/00/00</td>
                  <th scope="col"><button className="btn-edit"><Icons value={'edit'}/></button></th>
                </tr>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Producto 1</td>
                  <td className="table-show">Su sustancia</td>
                  <td className="table-show">Su formula</td>
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