import React, { useState } from "react";
import Icons from "../../../components/commons/icons";
import LeftMenu from "../../../components/LeftMenu";
import AppCheckbox from "../../../components/commons/AppCheckbox";

export default function UsersList() {

  return (
    <React.Fragment>
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-2">
            <LeftMenu />
          </div>
          <div className="col-lg-10">
            <h1 className="my-4">
              <b>Usuarios</b> 
              <a href="">
                <Icons value={'delete'}/>
              </a>
            </h1>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col"></th>
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
    </React.Fragment>
  );
}