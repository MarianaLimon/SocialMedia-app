import React, { useState } from "react";

import AppCheckboxColumns from "../components/commons/AppCheckboxColumns";
import AppCheckboxRow from "../components/commons/AppCheckboxRow";

import AppModal from "../components/commons/AppModal"

//import Styles from "../../App.css";

export default function Home() {

  const [show, setShow] = useState(false);

  return (
    <React.Fragment>

            <AppCheckboxColumns />

            <AppCheckboxRow />


            <button onClick={() => setShow(true)}>Show Modal</button>
            <AppModal title="Modal Title" onClose={() => setShow(false)} show={show}>
              <p>This is modal body</p>
            </AppModal>


    </React.Fragment>
  );
}
