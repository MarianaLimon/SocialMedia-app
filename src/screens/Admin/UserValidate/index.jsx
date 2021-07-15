import React, { useState, useEffect } from "react";
import { getUserById, patchUser } from "../../../services/users";
import { getProfessionalLicense } from "../../../services/sep";

import LeftMenu from "../../../components/LeftMenu";
import AppImage from "../../../components/commons/AppImage";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
//import AppSelect from "../../../components/commons/AppSelect";
//import AppButton from "../../../components/commons/AppButton";
import AppModal from "../../../components/commons/AppModal";
import { useParams, useHistory } from "react-router";

import Styles from "./index.module.css";
//import data from "@iconify/icons-vaadin/home";
//import userEvent from "@testing-library/user-event";
import Skeleton from "react-loading-skeleton";

export default function UserValidate() {
  const [specialty, setSpecialty] = useState({});
  //const [options, setOptions] = useState([]);
  const [dataUser, setDataUser] = useState({});
  const [dataProfessionalLicense, setDataProfessionalLicense] = useState([]);
  //const [updateLicense, setUpdateLicense] = useState(false);
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const request = async () => {
      try {
        const jsonUser = await getUserById(id);

        setDataUser(jsonUser);
        setSpecialty(jsonUser.specialty_id);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) request();
  }, [id]);

  useEffect(() => {
    const request = async () => {
      const jsonLicense = await getProfessionalLicense(
        dataUser.professional_license
      );

      if (jsonLicense.items) {
        setDataProfessionalLicense(jsonLicense.items[0]);
      }
    };

    if (dataUser.professional_license) request();
  }, [dataUser]);

  const validateUSer = async (status) => {
    try {
      const user = {
        status,
      };
      await patchUser(id, user);
      setShow(true);

      //history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <AppModal
        title=""
        onClose={() => {
          setShow(false);
          history.push("/users");
        }}
        show={show}
        estado="aviso"
      >
        <p>El usuario se ha actualizado</p>
      </AppModal>
      <Header />
      <div className="container my-4">
        <div className="row">
          {/* Columna del Menu */}
          <div className="col-lg-2">
            <LeftMenu />
          </div>
          <div className="col-12 col-md-10">
            {/* Columna del Contenido */}
            <div
              className={`${Styles.UservalidateContainer} col-lg-10 container`}
            >
              <div className="row">
                <div className="col-12">
                  <h1 className="col-12 my-4 text-center">
                    <b>Validación de Usuario</b>
                  </h1>
                  <div class="p-3 bg-white border rounded">
                    <div className="text-center">
                      {dataUser.professional_license_url ? (
                        <React.Fragment>
                          <AppImage
                            pathImage={dataUser.professional_license_url}
                            classImage="w-25"
                            altImage=""
                          />
                          <hr></hr>
                        </React.Fragment>
                      ) : (
                        <Skeleton width={300} height={250} />
                      )}
                    </div>

                    <div className="col-12 my-3 d-flex justify-content-between">
                      <div className="col-6 text-center">
                        <h5>Número de cédula</h5>
                        <p>
                          {dataUser.professional_license || (
                            <Skeleton width={300} />
                          )}
                        </p>
                      </div>
                      <div className="col-6 text-center">
                        <h5>Nombre</h5>
                        <p>
                          {`${dataUser.firstname} ${dataUser.lastname} ${dataUser.mother_lastname}` || (
                            <Skeleton width={500} />
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="col-12 my-3 d-flex justify-content-between">
                      <div className="col-6 text-center">
                        <h5>Especialidad</h5>
                        <p>{specialty.name || <Skeleton width={400} />}</p>
                      </div>
                    </div>
                  </div>

                  <div class="p-3 bg-white border rounded mt-3">
                    <h3 className="my-3 text-center">Informacion de la SEP</h3>
                    <hr></hr>
                    <div className="col-12 mb-4 d-flex justify-content-between">
                      <div className="col-6 text-md-center">
                        <h5>Número de cédula</h5>
                        <p>
                          {dataProfessionalLicense.idCedula || (
                            <Skeleton width={300} />
                          )}
                        </p>
                      </div>
                      <div className="col-6 text-md-center">
                        <h5>Nombre</h5>
                        <p>
                          {`${dataProfessionalLicense.nombre} ${dataProfessionalLicense.paterno} ${dataProfessionalLicense.materno}` || (
                            <Skeleton width={500} />
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="col-12 my-4 d-flex justify-content-between">
                      <div className="col-6 text-md-center">
                        <h5>Profesión</h5>
                        <p>
                          {dataProfessionalLicense.titulo || (
                            <Skeleton width={400} />
                          )}
                        </p>
                      </div>
                      <div className="col-6 text-md-center">
                        <h5>Tipo de Cédula</h5>
                        <p>
                          {dataProfessionalLicense.tipo || (
                            <Skeleton width={200} />
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="col-12 mt-4 d-flex justify-content-between">
                      <div className="col-6 text-md-center">
                        <h5>Institución</h5>
                        <p>
                          {dataProfessionalLicense.desins || (
                            <Skeleton width={500} />
                          )}
                        </p>
                      </div>
                      <div className="col-6 text-md-center">
                        <h5>Año de Expedición</h5>
                        <p>
                          {dataProfessionalLicense.anioreg || (
                            <Skeleton width={300} />
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-between flex-wrap  mb-5">
                    <div className="col-12 col-md-6 text-md-center  px-md-3 ">
                      <button
                        className={`${Styles.Button} w-75 d-block mx-auto  form-control btn button`}
                        onClick={() => {
                          validateUSer("Suscrito");
                        }}
                        text="VALIDAR"
                      >
                        VALIDAR
                      </button>
                    </div>
                    <div className="col-12 col-md-6 text-md-center  px-md-3">
                      <button
                        className={`${Styles.Button} w-75 d-block mx-auto  form-control btn button`}
                        onClick={() => {
                          validateUSer("Rechazado");
                        }}
                      >
                        RECHAZAR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
