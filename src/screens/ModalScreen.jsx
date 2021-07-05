import React, { useState } from "react";

import AppModal from "../components/commons/AppModal"

//import Styles from "../../App.css";

export default function Home() {

  const [show, setShow] = useState(false);

  return (
    <React.Fragment>

            <button onClick={() => setShow(true)}>Show Modal</button>
            <AppModal title="Modal Title" onClose={() => setShow(false)} show={show} estado=" ">
              <p>This is modal body</p>
            </AppModal>

    </React.Fragment>
  );
}
