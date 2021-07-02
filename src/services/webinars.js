import { API_URL_WEBINARS } from ".";

export const getWebinars = async () => {
    try {
      const response = await fetch(API_URL_WEBINARS);
      const allWebinars = await response.json();
      return await allWebinars.data.webinars;
    } catch (error) {
      console.log(error);
    }
};

export const getWebinarById = async (id) => {
    try { 
      const response = await fetch(`${API_URL_WEBINARS}/${id}`);
      const singleWebinar = await response.json();
      return await singleWebinar.data.webinars;
    } catch (error) {
      console.log(error);
    }
};

export const postWebinar = async (data) => {
    const response = await fetch(API_URL_WEBINARS, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
};

export const patchWebinar = async (id, data) => {
    const response = await fetch(`${API_URL_WEBINARS}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
};

export const deleteWebinar = async (id) => {
    const response = await fetch(`${API_URL_WEBINARS}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/JSON",
      },
    });
    return await response.json();
};

//------------------------   usage example ----------------------

/*

import { getWebinars, getWebinarById } from "./services/webinars";

const example = async () => {
    console.log(await getWebinars());
};

*/

//---------------------------------------------------------------

