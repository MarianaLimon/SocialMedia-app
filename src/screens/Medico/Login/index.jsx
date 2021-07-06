import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import banner from "../../../img/doctora-banner.png"
import Input from "../../../components/commons/AppInput";
import AppButton from "../../../components/commons/AppButton";
import { getUserById, postLogin } from "../../../services/users"
import jwt_decode from "jwt-decode";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  useEffect(() => {

  }, [])

  const verifyExpirationToken = (token) => {
    const decoded = jwt_decode(token);
    /*
    const now = Date.now().valueOf() / 1000

if (typeof decoded.exp !== 'undefined' && decoded.exp < now) {
    throw new Error(`token expired: ${JSON.stringify(decoded)}`)
}
if (typeof decoded.nbf !== 'undefined' && decoded.nbf > now) {
    throw new Error(`token expired: ${JSON.stringify(decoded)}`)
}
    */
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = {
        email,
        password,
      };


      const login = await postLogin(user);

      if (login.success) {
        const { token } = login.data;

        const dataUser = jwt_decode(token);

        localStorage.setItem("token", token);

        dataUser.role[0] === "medico" ? history.push("/home") : history.push("/homeadmin")
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-4">
            <img src={banner} alt="" className="banner-register" />
          </div>
          <div className="col-md-6 my-0 my-md-4">
            <h1 className="my-4">INICIAR SESIÓN</h1>
            <form className="mx-5" onSubmit={handleSubmit}>
              <Input
                placeholder="Correo electrónico"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                callback={setEmail} />
              <Input placeholder="Contraseña" type="password" required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                callback={setPassword}
              />
              <AppButton classButton="secondary w-50 d-block mx-auto mt-5" type="submit" text="INGRESAR" />
              <p className="text-center">¿Aún no estás registrado?<AppButton classButton="aqua" type="anchor" text="Registrate aquí" url="/register" /></p>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}