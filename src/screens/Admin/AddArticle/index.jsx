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
import AppDragDrop from "../../../components/commons/AppDragDrop";
import { postArticle } from "../../../services/articles";
import { getCategories } from "../../../services/categories";
import { getUsers } from "../../../services/users";
import { Editor, EditorState } from "draft-js";
//import { convertToRaw } from "draft-js";

export default function AddArticle() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [options, setOptions] = useState("");
  const [authors, setAuthors] = useState("");
  const [user_id, setUserId] = useState("");
  const history = useHistory();
  const [editorState, setEditorState] = useState("");

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
    console.log(arrayOptions);
    setAuthors(arrayOptions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newArticle = {
        category_id,
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id felis nec erat dignissim maximus. Donec ac felis ut augue semper fermentum. Proin vestibulum accumsan pharetra. Nunc at elementum metus. In a neque ac turpis vestibulum accumsan. Sed in urna nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed lorem justo, laoreet ultricies ex sed, facilisis gravida orci. Quisque interdum lorem et purus facilisis porttitor. Quisque varius sem nec augue convallis, nec venenatis ante tempus. Duis ac accumsan justo, ut luctus diam. Integer elementum semper quam, vitae euismod ligula tempus ut. Phasellus sodales ac felis eget iaculis.</p>",
        image,
        title,
        user_id,
      };

      const articlePosted = await postArticle(newArticle);
      if (articlePosted.success) {
        history.push("/articles-admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-2">
            <LeftMenu />
          </div>
          <div className="col-lg-10 px-lg-5">
            <h1 className="mt-3 title-sections mb-4">
              <b>{id ? "Editar" : "Agregar"} Artículo</b>
            </h1>
            <form onSubmit={handleSubmit}>
              <Input
                id=""
                placeholder="Nombre del artículo"
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
                placeholderOption="Autor del artículo"
              />

              <AppDragDrop
                stateUrl={image}
                callbackSetState={setImage}
                textDragDrop="Arrastre la imagen de la publicación"
                textBrowse="seleccione el archivo"
              />

              <EditorDraft
                editorState={editorState}
                onChange={(event) => setEditorState(event.target.value)}
              />

              <AppSelect
                classSelect="AppInput_InputComponent"
                classLabel="col-12 mb-3"
                idSelect="categoria"
                placeholder="Categoria"
                classContainerInput=""
                options={options}
                keyNameOption={1}
                keyNameValue={0}
                value={category_id}
                onChange={(event) => setCategoryId(event.target.value)}
                placeholderOption="Seleccione la categoria"
              />
              <AppButton
                classButton="aqua newArticle d-block mx-auto"
                type="submit"
                text="GUARDAR"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
