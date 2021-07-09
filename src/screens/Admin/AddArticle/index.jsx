import React, { useState } from "react";
import LeftMenu from "../../../components/LeftMenu";
import { useHistory } from "react-router";
import { getSpecialties } from "../../../services/specialties";
import { postUser } from "../../../services/users";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Input from "../../../components/commons/AppInput";
import AppButton from "../../../components/commons/AppButton";
import AppSelect from "../../../components/commons/AppSelect";

import AppFeedback from "../../../components/commons/AppFeedback";
import AppDragDrop from "../../../components/commons/AppDragDrop";

export default function AddArticle() {

  return (
    <React.Fragment>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-2">
            <LeftMenu />
          </div>
          <div className="col-lg-10">
            <h1 className="mt-3 title-sections">
              <b>Agregar Artículo</b> 
            </h1>
            <form action="">
              <Input
                id=""
                placeholder="Nombre del artículo"
                type="text"
                value=""
                required
              />
              <Input
                id=""
                placeholder="Autor del artículo"
                type="text"
                value=""
                required
              />
              <Input
                id="professional_license_url"
                placeholder="Upload Foto Cédula"
                type="hidden"
                // value={professional_license_url}
                // onChange={(event) =>
                //   setProfessionalLicenseUrl(event.target.value)
                // }
                required
              />
              


              <AppSelect
                classSelect="AppInput_InputComponent"
                classLabel="col-12"
                idSelect="especialidad"
                placeholder="Especialidad"
                classContainerInput=""
                // options={options}
                // keyNameOption={1}
                // keyNameValue={0}
                // value={specialty_id}
                // onChange={(event) => setSpecialtyId(event.target.value)}
              />
              <AppButton classButton="aqua newArticle mt-1 mt-lg-3 mb-1"  type="submit" text="GUARDAR" />
            </form>
          </div>
        </div>     
      </div>
      <Footer />
    </React.Fragment>
  );
}