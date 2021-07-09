import React, { useState, useEffect } from "react";

import { getSpecialties } from "../../../services/specialties";

import LeftMenu from "../../../components/LeftMenu";
import AppImage from "../../../components/commons/AppImage";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import AppSelect from "../../../components/commons/AppSelect";

import AppButton from "../../../components/commons/AppButton";

import Styles from "./index.module.css"

export default function UserValidate() {

  const [professional_licenseError, setProfessionalLicenseError] = useState(false);
  const [specialty_id, setSpecialtyId] = useState("");
  const [options, setOptions] = useState([]);
  
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
      const json = await getSpecialties();
      const arrayOptions = json.reduce(
        (accum, specialty) => (accum = [...accum, Object.values(specialty)]),
        []
      );
      setOptions(arrayOptions);
    };

    request();
  }, []);


  return (
    <React.Fragment>
      <Header />
      <div className="container my-4">
        <div className="row">

          {/* Columna del Menu */}
          <div className="col-lg-2">
            <LeftMenu />
          </div>

          {/* Columna del Contenido */}
          <div className="col-lg-10 container">

            <div className="row">
              <div className="col-12 col-md-2"></div>
              <div className="col-12 col-md-8">

                <h1 className="col-12 my-4 text-center">
                  <b>Validación de Usuario</b> 
                </h1>

                <div className="text-center">
                  <AppImage pathImage="https://avatars.githubusercontent.com/u/17584137?v=4" classImage="w-25" altImage=""/>
                </div>

                <div className="col-12 my-5 d-flex justify-content-between">
                  <div className="col-6 text-center">
                    <h5>Número de cédula</h5>
                    <p>0092743</p>
                  </div>
                  <div className="col-6 text-center">
                    <h5>Nombre</h5>
                    <p>Usuario 1</p>
                  </div>                
                </div>

                {/* Select List Especialities */}
                <div>
                {professional_licenseError
                    ? printError("Escriba su cédula profesional correctamente")
                    : null}
                  <AppSelect
                    classSelect="AppInput_InputComponent"
                    classLabel="col-12"
                    idSelect="especialidad"
                    placeholder="Especialidad"
                    classContainerInput=""
                    options={options}
                    keyNameOption={1}
                    keyNameValue={0}
                    value={specialty_id}
                    onChange={(event) => setSpecialtyId(event.target.value)}
                  />
                </div>

                <hr></hr>

                <h5 className="m-5 text-center">Informacion de la SEP</h5>

                <div className="col-12 mb-4 d-flex justify-content-between">
                  
                  <div className="col-6 text-center">
                    <h5>Número de cédula</h5>
                    <p>0092743</p>
                  </div>
                  <div className="col-6 text-center">
                    <h5>Nombre</h5>
                    <p>Usuario 1</p>
                  </div>                
                </div>

                <div className="col-12 my-4 d-flex justify-content-between">
                  <div className="col-6 text-center">
                    <h5>Profesión</h5>
                    <p>Medico General</p>
                  </div>
                  <div className="col-6 text-center">
                    <h5>Tipo de Cédula</h5>
                    <p>A1</p>
                  </div>          
                </div>

                <div className="col-12 mt-4 d-flex justify-content-between">
                  <div className="col-6 text-center">
                    <h5>Institución</h5>
                    <p>Universidad Autónoma de México</p>
                  </div>
                  <div className="col-6 text-center">
                    <h5>Año de Expedición</h5>
                    <p>2001</p>
                  </div>
                </div>

                <div className="col-12 d-flex justify-content-between">
                  <div className="col-6 text-center">
                      <AppButton
                      classButton="secondary w-50 d-block mx-auto my-5"
                      type="submit"
                      text="VALIDAR"
                    />
                  </div>
                  <div className="col-6 text-center">
                      <AppButton
                      classButton="secondary w-50 d-block mx-auto my-5"
                      type="submit"
                      text="RECHAZAR"
                    />
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