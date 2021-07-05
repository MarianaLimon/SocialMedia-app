import { API_URL_PRESENTATIONS } from "./index.js";

export const getPresentations = async () => {
  try {
    const response = await fetch(API_URL_PRESENTATIONS, {
      headers: {
        "authorization": localStorage.getItem("token")
      }
    });
    const allPresentations = await response.json();
    return await allPresentations.data.presentations;
  } catch (error) {
    console.log(error);
  }
};

//------------------------   usage example ----------------------

/*

import { getPresentations } from "./services/presentations";

const example = async () => {
    console.log(await getPresentations());
};

*/

//---------------------------------------------------------------
