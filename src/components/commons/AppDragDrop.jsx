import AppImage from "../../components/commons/AppImage";
import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import { DragDrop } from "@uppy/react";
import Transloadit from "@uppy/transloadit";
import "./appDragDrop.css";

function AppDragDrop({
  stateUrl,
  callbackSetState,
  textDragDrop,
  textBrowse,
  props,
}) {
  const uppy = new Uppy({
    meta: { type: "avatar" },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true,
  });

  uppy.use(Transloadit, {
    params: {
      auth: {
        key: "a67a160389ce4dfea1f8bb6c4d24a5bd",
      },
      template_id: "bca5c038a4f745ccbadaf9d83f924964",
    },
    waitForEncoding: true,
  });

  uppy.on("complete", (result) => {
    const url = result.successful[0].uploadURL;
    console.log(url);
    callbackSetState(url);
  });

  if (stateUrl) {
    return (
      <div>
        <AppImage
          pathImage={stateUrl}
          altImage="Professional License"
          classImage="cedula"
        />
      </div>
    );
  }
  return (
    <DragDrop
      uppy={uppy}
      locale={{
        strings: {
          // Text to show on the droppable area.
          // `%{browse}` is replaced with a link that opens the system file selection dialog.
          dropHereOr: `${
            textDragDrop ? textDragDrop : "Arraste aqui su imagen"
          } ó %{browse}`,
          // Used as the label for the link that opens the system file selection dialog.
          browse: `${textBrowse ? textBrowse : "seleccione el archivo"}`,
        },
      }}
    />
  );
}

export default AppDragDrop;
