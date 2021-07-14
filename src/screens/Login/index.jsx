import React, { useState } from "react";
import { useHistory } from "react-router";

import banner from "../../img/doctora-banner.png";
import Input from "../../components/commons/AppInput";
import AppButton from "../../components/commons/AppButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { postLogin } from "../../services/users";
import jwt_decode from "jwt-decode";
import { isEmail } from "../../utils/validations";
import AppFeedback from "../../components/commons/AppFeedback";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [home, setHome] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const history = useHistory();

  //useEffect(() => {}, []);

  const handleValidation = () => {
    let validForm = true;
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
    return validForm;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    if (!handleValidation()) {
      return false;
    }
    console.log("validation");
    try {
      const user = {
        email,
        password,
      };
      console.log(user);
      const login = await postLogin(user);

      if (login.success) {
        console.log("sucess", login.success);
        const { token } = login.data;

        const dataUser = jwt_decode(token);

        localStorage.setItem("token", token);

        dataUser.role[0] === "admin"
          ? history.push("/homeadmin")
          : history.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row d-flex align-items-center content-row">
          <div className="col-lg-6 my-4">
            <img src={banner} alt="" className="banner-register" />
          </div>
          <div className="col-lg-6 my-0 my-md-4">
            <h1 className="m-lg-5 mt-md-0 m-3 text-center">INICIAR SESIÓN</h1>
            <form className="m-md-5 m-3" onSubmit={handleSubmit}>
              <Input
                placeholder="Correo electrónico"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {emailError ? (
                <AppFeedback
                  className="moveup"
                  feedback="Escriba un email valido"
                />
              ) : null}
              <Input
                placeholder="Contraseña"
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {passwordError ? (
                <AppFeedback
                  className="moveup"
                  feedback="Escriba un password de por lo menos 6 caracteres"
                />
              ) : null}
              <AppButton
                classButton="secondary w-50 d-block mx-auto mt-4"
                type="submit"
                text="INGRESAR"
              />
              <p className="text-center">
                ¿Aún no estás registrado?
                <AppButton
                  classButton="aqua"
                  type="anchor"
                  text="Registrate aquí"
                  url="/register"
                />
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
