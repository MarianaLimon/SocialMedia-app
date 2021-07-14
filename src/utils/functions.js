import jwt_decode from "jwt-decode";

export const whois=()=>{
    if (localStorage.getItem("token")) {
        const userLogged = jwt_decode(localStorage.getItem("token"));
        return (userLogged);
    }    
}

export const logout=()=>{
    if (localStorage.getItem("token")) {
        localStorage.removeItem("token")
        console.log('SocialMedic - Log out');
    }    
}