import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import LeftMenu from "../../../components/LeftMenu";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Input from "../../../components/commons/AppInput";
import AppButton from "../../../components/commons/AppButton";
import AppSelect from "../../../components/commons/AppSelect";
import EditorDraft from "../../../components/EditorDraft";
import AppDragDrop from "../../../components/commons/AppDragDrop"
import { postWebinar, patchWebinar } from "../../../services/webinars";
import { getCategories } from "../../../services/categories";
import { getUsers } from "../../../services/users";
import AppModal from "../../../components/commons/AppModal";
import "./index.css"

export default function AddWebinar() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [dateWebinar, setDateWebinar] = useState("");
  const [duration, setDuration] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [options, setOptions] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [editorState, setEditorState] = useState("");
  const [authors, setAuthors] = useState("");
  const [user_id, setUserId] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory();
  useEffect(() => {

    requestCategories();
    requestAuthors();

  }, []);
  const requestCategories = async () => {
    const json = await getCategories();
    const arrayOptions = json.reduce(
      (accum, category) => (accum = [...accum, Object.values(category)]),
      []
    );
    setOptions(arrayOptions);
  };

  const requestAuthors = async () => {
    const json = await getUsers();
    const arrayOptions = json.reduce((accum, author) => {
      if (author.can_publish) {
        accum = [
          ...accum,
          [author._id, `${author.firstname} ${author.lastname}`],
        ];
      }
      return accum;
    }, []);

    setAuthors(arrayOptions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newWebinar = {
        title,
        user_id,
        image,
        video_url: videoUrl,
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id felis nec erat dignissim maximus. Donec ac felis ut augue semper fermentum. Proin vestibulum accumsan pharetra. Nunc at elementum metus. In a neque ac turpis vestibulum accumsan. Sed in urna nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed lorem justo, laoreet ultricies ex sed, facilisis gravida orci. Quisque interdum lorem et purus facilisis porttitor. Quisque varius sem nec augue convallis, nec venenatis ante tempus. Duis ac accumsan justo, ut luctus diam. Integer elementum semper quam, vitae euismod ligula tempus ut. Phasellus sodales ac felis eget iaculis.</p>",
        datewebinar: dateWebinar,
        duration,
        category_id

      };

      const webinarPosted = await postWebinar(newWebinar);

      if (webinarPosted.success) {
        setShow(true);
        //history.push("/webinars-admin");
      }
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
          history.push("/webinars-admin");
        }}
        show={show}
        estado="aviso"
      >
        <p>El webinar se ha guardado con éxito</p>
      </AppModal>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-2">
            <LeftMenu />
          </div>
          <div className="col-lg-10 px-lg-5">
            <h1 className="mt-3 title-sections mb-4">
              <b>{id ? "Editar" : "Agregar"} Webinar</b>
            </h1>
            <form onSubmit={handleSubmit}>
              <Input
                id=""
                placeholder="Nombre del webinar"
                type="text"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                required
              />
              <AppSelect
                classSelect="AppInput_InputComponent"
                classLabel="col-12 mb-3"
                idSelect="categoria"
                placeholder="Categoria"
                classContainerInput=""
                options={authors}
                keyNameOption={1}
                keyNameValue={0}
                value={user_id}
                onChange={(event) => setUserId(event.target.value)}
                placeholderOption="Autor del Webinar"
              />
              <Input
                id=""
                placeholder="URL del webinar"
                type="text"
                value={videoUrl}
                onChange={(event) => {
                  setVideoUrl(event.target.value);
                }}
                required
              />
              <AppDragDrop
                stateUrl={image}
                callbackSetState={setImage}
                textDragDrop="Arrastre la imagen de la publicación"
                textBrowse="seleccione el archivo"
              />

              <div className="columns">
                <Input
                  id=""
                  placeholder="Duración"
                  type="text"
                  value={duration}
                  onChange={(event) => {
                    setDuration(event.target.value);
                  }}
                  required
                  className="webinar-duration"
                />
                <Input
                  id=""
                  placeholder="S"
                  type="date"
                  value={dateWebinar}
                  onChange={(event) => {
                    setDateWebinar(event.target.value);
                  }}
                  required
                  className="webinar-date"
                />
              </div>

              <EditorDraft editorState={editorState}
                onChange={(event) => setEditorState(event.target.value)} />

              <AppSelect
                classSelect="AppInput_InputComponent"
                classLabel="col-12 mb-3"
                idSelect="categoria"
                placeholder="Categoría"
                classContainerInput=""
                options={options}
                keyNameOption={1}
                keyNameValue={0}
                value={category_id}
                onChange={(event) => setCategoryId(event.target.value)}
                placeholderOption="Seleccione la categoría"
              />
              <AppButton classButton="aqua newArticle d-block mx-auto" type="submit" text="GUARDAR" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}