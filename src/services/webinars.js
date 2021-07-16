import { API_URL_WEBINARS } from ".";

export const getWebinars = async () => {
  try {
    const response = await fetch(API_URL_WEBINARS, {
      headers: {
        "authorization": localStorage.getItem("token")
      }
    });
    const allWebinars = await response.json();
    return await allWebinars.data.webinars;
  } catch (error) {
    console.log(error);
  }
};

export const getWebinarById = async (id) => {
  try {
    const response = await fetch(`${API_URL_WEBINARS}/${id}`, {
      headers: {
        "authorization": localStorage.getItem("token")
      }
    });
    const singleWebinar = await response.json();
    return await singleWebinar.data.webinars;
  } catch (error) {
    console.log(error);
  }
};

export const postWebinar = async (data) => {
  try {
    const response = await fetch(API_URL_WEBINARS, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
        "authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const patchWebinar = async (id, data) => {
  try {
    const response = await fetch(`${API_URL_WEBINARS}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/JSON",
        "authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteWebinar = async (id) => {
  try {
    const response = await fetch(`${API_URL_WEBINARS}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/JSON",
        "authorization": localStorage.getItem("token")
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

//------------------------   usage example ----------------------

/*

import { getWebinars, getWebinarById } from "./services/webinars";

const example = async () => {
    console.log(await getWebinars());
};

*/

//---------------------------------------------------------------

