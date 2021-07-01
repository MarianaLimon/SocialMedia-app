import { API_URL_USERS } from "./index.js";

export const getUsers = async () => {
    try {
      const response = await fetch(API_URL_USERS);
      const allUser = await response.json();
      return await allUser.data.users;
    } catch (error) {
      console.log(error);
    }
};

export const getUserById = async (id) => {
    try { 
      const response = await fetch(`${API_URL_USERS}/${id}`);
      const singleUser = await response.json();
      return await singleUser.data.users;
    } catch (error) {
      console.log(error);
    }
};

export const postUser = async (data) => {
    const response = await fetch(API_URL_USERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
};

export const postLogin = async (data) =>{
    const response = await fetch(`${API_URL_USERS}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};

export const patchUser = async (id, data) => {
    const response = await fetch(`${API_URL_USERS}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
};

export const deleteUser = async (id) => {
    const response = await fetch(`${API_URL_USERS}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/JSON",
      },
    });
    return await response.json();
};




