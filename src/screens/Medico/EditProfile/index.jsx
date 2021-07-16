import React, { useState, useEffect } from "react";
import AppImage from "../../../components/commons/AppImage";
import Input from "../../../components/commons/AppInput";
import AppButton from "../../../components/commons/AppButton";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

import { useHistory } from "react-router-dom";
import AppDragDrop from "../../../components/commons/AppDragDrop";
import { patchUser, getUserById } from "../../../services/users";
import { whois } from "../../../utils/functions";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import LeftMenuDoctor from "../../../components/LeftMenuDoctor";

import "./index.css";

export default function EditProfile() {
  const [user, setUser] = useState({});
  const [newAvatar, setNewAvatar] = useState("");
  const [loader, setLoader] = useState(false);
  const [loaderNickName, setLoaderNickName] = useState(false);
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    const userLogged = whois();
    if (userLogged.id) {
      requestUser(userLogged.id);
    }
  }, []);

  useEffect(() => {
    if (user.nickname) {
      setNickName(user.nickname);
    }
  }, [user]);

  useEffect(() => {
    if (newAvatar.length > 10) {
      const data = {
        avatar_url: newAvatar,
      };
      requestUpdateUser(user._id, data);
    }
  }, [newAvatar]);

  const requestUpdateUser = async (idUser, data) => {
    try {
      const userUpdated = await patchUser(idUser, data);

      if (userUpdated.success) {
        requestUser(idUser);
        setLoader(false);
        setLoaderNickName(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const requestUser = async (id) => {
    const json = await getUserById(id);
    setUser(json);
  };

  const changeAvatar = (event) => {
    event.preventDefault();
    setLoader(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (nickName) {
      const data = {
        nickname: nickName,
      };
      setLoaderNickName(true);
      requestUpdateUser(user._id, data);
    }
  };

  const history = useHistory()
  const logout = () => {
    localStorage.removeItem("token");
    history.push('/');
  } 

  return (
    <React.Fragment>
      <Header />
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-2 d-none d-md-block">
            <LeftMenuDoctor />
          </div>
          <div className="col-12 col-md-10 mb-5">
            <div className="card my-4 p-4">
              {loader ? (
                <React.Fragment>
                  <div className="d-flex justify-content-center mb-4">
                    <Skeleton circle={true} width={256} height={256} />
                  </div>
                  <AppDragDrop
                    stateUrl={newAvatar}
                    callbackSetState={setNewAvatar}
                    textDragDrop="Arrastre la foto de su Cédula Profesional"
                    textBrowse="seleccione el archivo"
                  />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <AppImage
                    pathImage={user.avatar_url && user.avatar_url}
                    classImage="avatar-edit-profile mb-4 border"
                    altImage=""
                  />
                  <AppButton
                    classButton="aqua btn-profile-primary d-block mx-auto "
                    text="Subir foto de perfil"
                    onClick={changeAvatar}
                  />
                </React.Fragment>
              )}
            </div>
            <div className="border rounded my-4 p-4 pb-0">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column justify-content-center align-items-md-center">
                  <h5>NickName</h5>
                  {loaderNickName ? (
                    <Skeleton width={400} />
                  ) : (
                    <Input
                      placeholder="NickName"
                      type="text"
                      classContainerInput="input-nick-name"
                      required
                      value={nickName}
                      onChange={(event) => setNickName(event.target.value)}
                    />
                  )}
                </div>

                <AppButton
                  classButton="aqua btn-profile-primary d-block mx-auto "
                  type="submit"
                  text="Actualizar NickName"
                  disabled={!nickName}
                />
              </form>
            </div>
            <AppButton
              classButton="secondary btn-profile-secondary d-block mx-auto my-5"
              onClick={logout}
              text="Cerrar Sesión"
            />
          </div>
          <div className="col col-md-3"></div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
