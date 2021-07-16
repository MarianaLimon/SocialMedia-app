import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { CSSTransition } from "react-transition-group";

import "./AppModal.css";

const AppModal = props => {

  const botones = () => {
    if (props.estado === "aviso") {
      return (
        <div className="modal-footer">
          {/* Button Aceptar */}
          <button onClick={props.onClose} className="button">
            Aceptar
          </button>
        </div>
      )
    }

    return (
      <div className="modal-footer">
        {/* Button Aceptar */}
        <button onClick={props.onClick} className="button">
          Aceptar
        </button>
        {/* Button Cancelar */}
        <button onClick={props.onClose} className="button">
          Cancelar
        </button>
      </div>
    )

  }

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          {/* Modal Body */}
          <div className="modal-body">{props.children}</div>

          {botones()}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default AppModal;


{/* 
  
  <button onClick={() => setShow(true)}>Show Modal</button>
  <AppModal title="Modal Title" onClose={() => setShow(false)} show={show} estado=" ">
    <p>This is modal body</p>
  </AppModal> 

*/}
