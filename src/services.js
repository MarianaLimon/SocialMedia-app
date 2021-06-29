// URL Base
const API_URL = "http://localhost:8080";
//const API_URL = "https://socialmedicapi-accountable-quoll-rk.mybluemix.net"

// Endpoints
const postLoginURL = `${API_URL}/users/`
const postDetailURL = (id) => `${API_URL}/users/${id}/`;
const postURL = `${API_URL}/webinars/`;
const postDetailURL = (id) => `${API_URL}/webinars/${id}/`;
const postURL = `${API_URL}/products/`;
const postDetailURL = (id) => `${API_URL}/products/${id}/`;
const postURL = `${API_URL}/posts/`;
const postDetailURL = (id) => `${API_URL}/posts/${id}/`;
const postURL = `${API_URL}/replies/`;
const postDetailURL = (id) => `${API_URL}/replies/${id}/`;
