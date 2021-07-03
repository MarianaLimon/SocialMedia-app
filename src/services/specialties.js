import { API_URL_SPELCIALTIES } from "./index.js";

export const getSpecialties = async () => {
    try {
      const response = await fetch(API_URL_SPELCIALTIES);
      const allSpecialties = await response.json();
      return await allSpecialties.data.specialties;
    } catch (error) {
      console.log(error);
    }
};

//------------------------   usage example ----------------------

/*

import { getSpecialties } from "./services/specialties";

const example = async () => {
    console.log(await getSpecialties());
};

*/

//---------------------------------------------------------------
