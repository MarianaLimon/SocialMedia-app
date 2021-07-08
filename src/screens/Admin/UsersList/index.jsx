import React, { useState } from "react";
import Icons from "../../../components/commons/icons";
import LeftMenu from "../../../components/LeftMenu";
import AppCheckbox from "../../../components/commons/AppCheckbox";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

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
            <h1 className="my-4">
              <b>Usuarios</b>
            </h1>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col"><Icons value={'delete'}/></th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Email</th>
                  <th scope="col">Estatus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Mark</td>
                  <td>Otto@mdo</td>
                  <td>Pendiente</td>
                </tr>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Jacob</td>
                  <td>Thornton@mdo</td>
                  <td>Suscrito</td>
                </tr>
                <tr>
                  <th scope="row"><AppCheckbox /></th>
                  <td>Larry</td>
                  <td>theBird@mdo</td>
                  <td>Suscrito</td>
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