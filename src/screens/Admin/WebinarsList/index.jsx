import React, { useState } from "react";
import Icons from "../../../components/commons/icons";
import LeftMenu from "../../../components/LeftMenu";
import AppCheckbox from "../../../components/commons/AppCheckbox";
import AppButton from "../../../components/commons/AppButton";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function WebinarsListAdmin() {

  return (
    <React.Fragment>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-2">
            <LeftMenu />
          </div>
          <div className="col-lg-10">
            <div className="d-flex justify-content-between w-auto">
              <h1 className="my-4">
                <b>Webinars</b> 
              </h1>
              <AppButton classButton="secondary newArticle" type="submit" text="+ Nuevo Webinar" />
            </div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col"><Icons value={'delete'}/></th>
                  <th scope="col">Titulo</th>
                  <th scope="col">Categorias</th>
                  <th scope="col">Duración</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Actualizado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Mark</td>
                  <td>Otto@mdo</td>
                  <td>00/00/00</td>
                  <td>00/00/00</td>
                  <td>00/00/00</td>
                </tr>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Jacob</td>
                  <td>Thornton@mdo</td>
                  <td>00/00/00</td>
                  <td>00/00/00</td>
                  <td>00/00/00</td>
                </tr>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Larry</td>
                  <td>theBird@mdo</td>
                  <td>00/00/00</td>
                  <td>00/00/00</td>
                  <td>00/00/00</td>
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