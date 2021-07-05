import { API_URL_ARTICLES } from "./index.js";

export const getArticles = async () => {
    try {
        const response = await fetch(API_URL_ARTICLES);
        const allArticles = await response.json();
        return await allArticles.data.articles;
    } catch (error) {
        console.log(error);
    }
};

export const getArticleById = async (id) => {
    try {
        const response = await fetch(`${API_URL_ARTICLES}/${id}`);
        const article = await response.json();
        return article.data.article;
    } catch (error) {
        console.log(error);
    }
};

export const postArticle = async (data) => {
    const response = await fetch(API_URL_ARTICLES, {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};

export const patchArticle = async (id, data) => {
    const response = await fetch(`${API_URL_ARTICLES}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/JSON",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};

export const deleteArticle = async (id) => {
    const response = await fetch(`${API_URL_ARTICLES}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/JSON",
        },
    });
    return await response.json();
};