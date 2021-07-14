import React, { useState, useEffect } from "react";
import { getUsers } from "../../../services/users";
import Icons from "../../../components/commons/icons";
import LeftMenu from "../../../components/LeftMenu";
import AppCheckbox from "../../../components/commons/AppCheckbox";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useHistory } from "react-router";

import "./index.css"
import react from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  useEffect(() => {
    const request = async () => {
      const usersList = await getUsers();
      setUsers(usersList);
    };

    request();
  }, []);
  const printUsers = ([
    key,
    {
      _id: idUser,
      firstname: firstName,
      lastname: lastName,
      mother_lastname: motherLastName,
      email: email,
      status: status,
      registerdate: registerDate
    },
  ]) => {
    return (
      <React.Fragment>
        <tr key={idUser}>
          <th scope="row"><AppCheckbox /></th>
          <td>{`${firstName} ${lastName}`}</td>
          <td className="d-lg-block d-none">{email}</td>
          <td>{status}</td>
          <th scope="col"><button className={`btn-validate`} onClick={() => { history.push(`/user-validate/${idUser}`) }}><Icons value={'validate'} /></button></th>
        </tr>
      </React.Fragment>

    );
  };


  const buildUsers = (users) => {
    if (Object.entries(users).length) {
      return Object.entries(users).filter(user => user[1].role[0] == "medico").map(printUsers);
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
            <h1 className="my-4 title-sections">
              <b>Usuarios</b>
            </h1>
            <table className="table table-striped">
              <thead>
                <tr key="users1">
                  <th scope="col"><Icons value={'delete'} /></th>
                  <th scope="col"><span className="table-show">Nombre</span></th>
                  <th scope="col" className="d-lg-block d-none">Email</th>
                  <th scope="col"><span className="table-show">Estatus</span></th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
                {buildUsers(users)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}