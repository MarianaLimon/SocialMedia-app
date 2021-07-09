import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getSpecialties } from "../../services/specialties";
import { postUser } from "../../services/users";
import banner from "../../img/doctor-banner.png";
import Input from "../../components/commons/AppInput";
import AppButton from "../../components/commons/AppButton";
import AppSelect from "../../components/commons/AppSelect";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./index.css";
import { isName, isEmail, allowLetters } from "../../utils/validations";
import AppFeedback from "../../components/commons/AppFeedback";
import AppDragDrop from "../../components/commons/AppDragDrop";
import defaultAvatar from "../../img/avatar-default.png";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mother_lastname, setMotherLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [specialty_id, setSpecialtyId] = useState("");
  const [professional_license, setProfessionalLicense] = useState("");
  const [professional_license_url, setProfessionalLicenseUrl] = useState("");
  const [avatar_url, setAvatarUrl] = useState("");
  const [options, setOptions] = useState([]);
  const [checked, setChecked] = useState(false);
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [mother_lastnameError, setMotherLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password_confirmError, setPasswordConfirmError] = useState(false);
  const [specialty_idError, setSpecialtyIdError] = useState(false);
  const [professional_licenseError, setProfessionalLicenseError] =
    useState(false);
  const [professional_license_urlError, setProfessionalLicenseUrlError] =
    useState(false);
  const [termsError, setTermsError] = useState(false);

  let validForm = true;
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
    //console.log("avatar", defaultAvatar);
    setAvatarUrl(defaultAvatar.src);
  }, []);

  const history = useHistory();

  const handleValidation = () => {
    if (!isName(firstname) || firstname.length < 3) {
      validForm = false;
      setFirstnameError(true);
    } else {
      setFirstnameError(false);
    }
    if (!isName(lastname) || lastname.length < 3) {
      validForm = false;
      setLastnameError(true);
    } else {
      setLastnameError(false);
    }
    if (!isName(mother_lastname) || mother_lastname.length < 3) {
      validForm = false;
      setMotherLastnameError(true);
    } else {
      setMotherLastnameError(false);
    }
    if (!isEmail(email)) {
      validForm = false;
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (password.length < 6) {
      validForm = false;
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (password_confirm.length < 6 || password != password_confirm) {
      validForm = false;
      setPasswordConfirmError(true);
    } else {
      setPasswordConfirmError(false);
    }
    if (professional_license.length < 4) {
      validForm = false;
      setProfessionalLicenseError(true);
    } else {
      setProfessionalLicenseError(false);
    }
    if (specialty_id === "") {
      validForm = false;
      setSpecialtyIdError(true);
    } else {
      setSpecialtyIdError(false);
    }
    if (professional_license_url.length === "") {
      validForm = false;
      setProfessionalLicenseUrlError(true);
    } else {
      setProfessionalLicenseUrlError(false);
    }
    if (!checked) {
      validForm = false;
      setTermsError(true);
    } else {
      setTermsError(false);
    }
    return validForm;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!handleValidation()) {
      return false;
    }
    try {
      const newUser = {
        firstname,
        lastname,
        mother_lastname,
        email,
        password,
        password_confirm,
        specialty_id,
        professional_license,
        professional_license_url,
      };
      await postUser(newUser);
      history.push("/tnksregister");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="register-container container">
        <div className="row">
          <div className="col-md-6 my-4">
            <img src={banner} alt="" className="banner-register" />
          </div>
          <div className="form-wrapper col-md-6">
            <h1 className="mt-4">REGISTRO</h1>
            <form onSubmit={handleSubmit} className="needs-validation">
              <Input
                id="firstname"
                placeholder="Nombre"
                type="text"
                value={firstname}
                required
                onChange={(event) => {
                  allowLetters(event);
                  setFirstname(event.target.value);
                }}
              />
              {firstnameError ? (
                <AppFeedback className="moveup" feedback="Escriba su nombre" />
              ) : null}
              <Input
                id="lastname"
                placeholder="Apellido Paterno"
                type="text"
                value={lastname}
                onChange={(event) => {
                  allowLetters(event);
                  setLastname(event.target.value);
                }}
                required
              />
              {lastnameError ? (
                <AppFeedback
                  className="moveup"
                  feedback="Escriba su apellido paterno"
                />
              ) : null}
              <Input
                id="mother_lastname"
                placeholder="Apellido Materno"
                type="text"
                value={mother_lastname}
                onChange={(event) => {
                  allowLetters(event);
                  setMotherLastname(event.target.value);
                }}
                required
              />
              {mother_lastnameError ? (
                <AppFeedback
                  className="moveup"
                  feedback="Escriba su apellido materno"
                />
              ) : null}
              <Input
                id="email"
                placeholder="Correo electrónico"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              {emailError ? (
                <AppFeedback
                  className="moveup"
                  feedback="Escriba un email valido"
                />
              ) : null}
              <Input
                id="password"
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              {passwordError ? (
                <AppFeedback
                  className="moveup"
                  feedback="Escriba un password de por lo menos 6 caracteres"
                />
              ) : null}
              <Input
                id="password_confirm"
                placeholder="Confirme su contraseña"
                type="password"
                value={password_confirm}
                onChange={(event) => setPasswordConfirm(event.target.value)}
                required
              />
              {password_confirmError ? (
                <AppFeedback
                  className="moveup"
                  feedback="Confirme su password, debe ser identico"
                />
              ) : null}
              <Input
                id="professional_license"
                placeholder="Cédula Profesional"
                type="text"
                value={professional_license}
                onChange={(event) => {
                  setProfessionalLicense(event.target.value);
                }}
                required
              />
              {professional_licenseError ? (
                <AppFeedback
                  className="moveup"
                  feedback="Escriba su cédula profesional correctamente"
                />
              ) : null}
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
              {specialty_idError ? (
                <AppFeedback
                  className="moveup"
                  feedback="Selecione su especialidad"
                />
              ) : null}
              <Input
                id="avatarurl"
                placeholder="avatar"
                type="text"
                value={avatar_url}
                onChange={(event) => setAvatarUrl(event.target.value)}
                required
              />
              <Input
                id="professional_license_url"
                type="hidden"
                placeholder="Url Cédula Profesional"
                value={professional_license_url}
                onChange={(event) =>
                  setProfessionalLicenseUrl(event.target.value)
                }
                required
              />
              <AppDragDrop
                stateUrl={professional_license_url}
                callbackSetState={setProfessionalLicenseUrl}
                textDragDrop="Arrastre la foto de su Cedula Profesional"
                textBrowse="seleccione el archivo"
              />
              <label>
                <input
                  type="checkbox"
                  onChange={() => setChecked(!checked)}
                  defaultChecked={checked}
                />{" "}
                Acepto los{" "}
                <AppButton type="anchor" text="Términos y Condiciones" />
              </label>
              <div>
                {termsError ? (
                  <AppFeedback feedback="Acepte los terminos y condiciones" />
                ) : null}
              </div>

              <AppButton
                classButton="secondary w-50 d-block mx-auto mb-5"
                type="submit"
                text="Registrar"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
