import React, { useState, useEffect } from "react";
import { getSpecialties } from "../../../services/specialties";
import { getUserById, patchUser } from "../../../services/users";
import { getProfessionalLicense } from "../../../services/sep";

import LeftMenu from "../../../components/LeftMenu";
import AppImage from "../../../components/commons/AppImage";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import AppSelect from "../../../components/commons/AppSelect";
import AppButton from "../../../components/commons/AppButton";
import AppModal from "../../../components/commons/AppModal";
import { useParams, useHistory } from "react-router";

import Styles from "./index.module.css";
import data from "@iconify/icons-vaadin/home";
import userEvent from "@testing-library/user-event";

export default function UserValidate() {
  const [professional_licenseError, setProfessionalLicenseError] =
    useState(false);
  const [specialty, setSpecialty] = useState({});
  const [options, setOptions] = useState([]);
  const [dataUser, setDataUser] = useState({});
  const [dataProfessionalLicense, setDataProfessionalLicense] = useState([]);
  const [updateLicense, setUpdateLicense] = useState(false);
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const printError = (feddback) => {
    return (
      <small
        className="text-danger"
        style={{ position: "absolute", marginTop: "-20px" }}
      >
        {feddback}
      </small>
    );
  };

  useEffect(() => {
    const request = async () => {
      try {
        const json = await getSpecialties();
        const arrayOptions = json.reduce(
          (accum, specialty) => (accum = [...accum, Object.values(specialty)]),
          []
        );
        setOptions(arrayOptions);

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

          {/* Columna del Contenido */}
          <div
            className={`${Styles.UservalidateContainer} col-lg-10 container`}
          >
            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-8">
                <h1 className="col-12 my-4 text-center">
                  <b>Validación de Usuario</b>
                </h1>

                <div className="text-center">
                  <AppImage
                    pathImage={`${dataUser.professional_license_url}`}
                    classImage="w-25"
                    altImage=""
                  />
                </div>

                <div className="col-12 my-3 d-flex justify-content-between">
                  <div className="col-6 text-center">
                    <h5>Número de cédula</h5>
                    <p>{`${dataUser.professional_license}`}</p>
                  </div>
                  <div className="col-6 text-center">
                    <h5>Nombre</h5>
                    <p>{`${dataUser.firstname} ${dataUser.lastname} ${dataUser.mother_lastname}`}</p>
                  </div>
                </div>

                {/* Select List Especialities */}
                <div className="col-12 my-3 d-flex justify-content-between">
                  <div className="col-6 text-center">
                    <h5>Especialidad</h5>
                    <p>{`${specialty.name}`}</p>
                    {/*
                    <AppSelect
                      classSelect="AppInput_InputComponent"
                      classLabel="col-12 mb-0"
                      idSelect="especialidad"
                      placeholder="Especialidad"
                      classContainerInput=""
                      options={options}
                      keyNameOption={1}
                      keyNameValue={0}
                      onChange={(event) => setSpecialty(event.target.value)}
                      placeholderOption={"Seleccione una especialidad"}
                      valueSelected={specialty.id ? specialty.id : ""}
                    />
                    */}
                  </div>
                </div>

                <hr></hr>

                <h5 className="my-3 text-center">Informacion de la SEP</h5>

                <div className="col-12 mb-4 d-flex justify-content-between">
                  <div className="col-6 text-md-center">
                    <h5>Número de cédula</h5>
                    <p>{dataProfessionalLicense.idCedula}</p>
                  </div>
                  <div className="col-6 text-md-center">
                    <h5>Nombre</h5>
                    <p>{`${dataProfessionalLicense.nombre} ${dataProfessionalLicense.paterno} ${dataProfessionalLicense.materno}`}</p>
                  </div>
                </div>

                <div className="col-12 my-4 d-flex justify-content-between">
                  <div className="col-6 text-md-center">
                    <h5>Profesión</h5>
                    <p>{dataProfessionalLicense.titulo}</p>
                  </div>
                  <div className="col-6 text-md-center">
                    <h5>Tipo de Cédula</h5>
                    <p>{dataProfessionalLicense.tipo}</p>
                  </div>
                </div>

                <div className="col-12 mt-4 d-flex justify-content-between">
                  <div className="col-6 text-md-center">
                    <h5>Institución</h5>
                    <p>{dataProfessionalLicense.desins}</p>
                  </div>
                  <div className="col-6 text-md-center">
                    <h5>Año de Expedición</h5>
                    <p>{dataProfessionalLicense.anioreg}</p>
                  </div>
                </div>

                <div className="col-12 d-flex justify-content-between">
                  <div className="col-6 text-md-center">
                    <button
                      className={`${Styles.Button} w-50 d-block mx-auto my-5 form-control btn button`}
                      onClick={() => {
                        validateUSer("Suscrito");
                      }}
                      text="VALIDAR"
                    >
                      VALIDAR
                    </button>
                  </div>
                  <div className="col-6 text-md-center">
                    <button
                      className={`${Styles.Button} w-50 d-block mx-auto my-5 form-control btn button`}
                      onClick={() => {
                        validateUSer("Rechazado");
                      }}
                    >
                      RECHAZAR
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
