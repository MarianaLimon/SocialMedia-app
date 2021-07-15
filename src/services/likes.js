import { API_URL_LIKES } from "./index.js";

export const getLikes = async () => {
    try {

        const response = await fetch(API_URL_LIKES, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
        const allLikes = await response.json();
        return await allLikes.data.Likes;
    } catch (error) {
        console.log(error);
    }
};

export const getLikeById = async (id) => {
    try {
        const response = await fetch(`${API_URL_LIKES}/${id}`, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
        const Like = await response.json();
        return Like.data.Like;
    } catch (error) {
        console.log(error);
    }
};

export const getCountLikesByDocument = async (document, id) => {
    try {
        const response = await fetch(`${API_URL_LIKES}/${document}/${id}`, {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
        const Like = await response.json();
        return Like.data.likes;
    } catch (error) {
        console.log(error);
    }
};

export const postLike = async (data) => {
    try {
        const response = await fetch(API_URL_LIKES, {
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

export const patchLike = async (id, data) => {
    try {
        const response = await fetch(`${API_URL_LIKES}/${id}`, {
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

export const deleteLike = async (id) => {
    try {
        const response = await fetch(`${API_URL_LIKES}/${id}`, {
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
}


export const getLikeByUser = async (data) => {
    try {

        const response = await fetch(`${API_URL_LIKES}/user`, {
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
}