import { API_URL_PRODUCTS } from "./index.js";

export const getProducts = async () => {
    try {
      const response = await fetch(API_URL_PRODUCTS);
      const allProducts = await response.json();
      return await allProducts.data.products;
    } catch (error) {
      console.log(error);
    }
};

export const getProductById = async (id) => {
    try { 
      const response = await fetch(`${API_URL_PRODUCTS}/${id}`);
      const singleProduct = await response.json();
      return await singleProduct.data.products;
    } catch (error) {
      console.log(error);
    }
};

export const postProduct = async (data) => {
    const response = await fetch(API_URL_PRODUCTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
};

export const patchProduct = async (id, data) => {
    const response = await fetch(`${API_URL_PRODUCTS}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
};

export const deleteProduct = async (id) => {
    const response = await fetch(`${API_URL_PRODUCTS}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/JSON",
      },
    });
    return await response.json();
};

//------------------------   usage example ----------------------

/*

import { getProducts, getProductById } from "./services/products";

const example = async () => {
    console.log(await getProductById("60c451f27549e5114cbd6832"));
};

*/

//---------------------------------------------------------------

