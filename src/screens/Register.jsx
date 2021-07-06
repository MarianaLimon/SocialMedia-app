import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getSpecialties } from "../services/specialties";
import { postUser } from "../services/users";
import banner from "../img/doctor-banner.png";
import Input from "../components/commons/AppInput";
import AppCheckbox from "../components/commons/AppCheckbox";
import AppButton from "../components/commons/AppButton";
import AppSelect from "../components/commons/AppSelect";

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
  const [options, setOptions] = useState([]);

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

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
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

  /*const termins = () => {
    return <AppButton type="anchor" text="Términos y Condiciones" />;
  };*/

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-4">
            <img src={banner} alt="" className="banner-register" />
          </div>
          <div className="col-md-6 my-4">
            <h1 className="my-4">REGISTRO</h1>
            <form onSubmit={handleSubmit}>
              <Input
                id="firstname"
                placeholder="Nombre"
                type="text"
                value={firstname}
                onChange={(event) => setFirstname(event.target.value)}
                required
              />
              <Input
                id="lastname"
                placeholder="Apellido Paterno"
                type="text"
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
                required
              />
              <Input
                id="mother_lastname"
                placeholder="Apellido Materno"
                type="text"
                value={mother_lastname}
                onChange={(event) => setMotherLastname(event.target.value)}
                required
              />
              <Input
                id="email"
                placeholder="Correo electrónico"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <Input
                id="password"
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <Input
                id="password_confirm"
                placeholder="Confirme su contraseña"
                type="password"
                value={password_confirm}
                onChange={(event) => setPasswordConfirm(event.target.value)}
                required
              />
              <Input
                id="professional_license"
                placeholder="Cédula Profesional"
                type="text"
                value={professional_license}
                onChange={(event) => setProfessionalLicense(event.target.value)}
                required
              />
              <AppSelect
                classSelect="col-12"
                idSelect="especialidad"
                placeholder="Especialidad"
                classContainerInput=""
                options={options}
                keyNameOption={1}
                keyNameValue={0}
                value={specialty_id}
                onChange={(event) => setSpecialtyId(event.target.value)}
              />

              <Input
                id="professional_license_url"
                placeholder="Upload Foto Cédula"
                type="text"
                value={professional_license_url}
                onChange={(event) =>
                  setProfessionalLicenseUrl(event.target.value)
                }
                required
              />
              {/* <AppCheckbox label={termins()}/> */}
              <AppCheckbox
                id="name"
                label={`Acepto los ${(
                  <AppButton type="anchor" text="Términos y Condiciones" />
                )}`}
              />
              <AppButton
                classButton="secondary w-50 d-block mx-auto my-5"
                type="submit"
                text="Registrar"
              />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
