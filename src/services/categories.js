import { API_URL_CATEGORIES } from "./index.js";

export const getCategories = async () => {
    try {
      const response = await fetch(API_URL_CATEGORIES);
      const allCategories = await response.json();
      return await allCategories.data.categories;
    } catch (error) {
      console.log(error);
    }
};

//------------------------   usage example ----------------------

/*

import { getCategories } from "./services/categories";

const example = async () => {
    console.log(await getCategories());
};

*/

//---------------------------------------------------------------
