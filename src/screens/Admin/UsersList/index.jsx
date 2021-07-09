import React, { useState } from "react";
import Icons from "../../../components/commons/icons";
import LeftMenu from "../../../components/LeftMenu";
import AppCheckbox from "../../../components/commons/AppCheckbox";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import "./index.css"

export default function UsersList() {

  return (
    <React.Fragment>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-2">
            <LeftMenu />
          </div>
          <div className="col-lg-10">
            <h1 className="my-4 title-sections">
              <b>Usuarios</b>
            </h1>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col"><Icons value={'delete'}/></th>
                  <th scope="col"><span className="table-show">Nombre</span></th>
                  <th scope="col" className="d-lg-block d-none">Email</th>
                  <th scope="col"><span className="table-show">Estatus</span></th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Mark</td>
                  <td className="d-lg-block d-none">Otto@mdo</td>
                  <td>Pendiente</td>
                  <th scope="col"><button className="btn-validate"><Icons value={'validate'}/></button></th>
                </tr>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Jacob</td>
                  <td className="d-lg-block d-none">Thornton@mdo</td>
                  <td>Suscrito</td>
                  <th scope="col"><button className="btn-validate"><Icons value={'validate'}/></button></th>
                </tr>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Larry</td>
                  <td className="d-lg-block d-none">theBird@mdo</td>
                  <td>Suscrito</td>
                  <th scope="col"><button className="btn-validate"><Icons value={'validate'}/></button></th>
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