import jwt_decode from "jwt-decode";

const { format } = require('date-fns')
const { es } = require('date-fns/locale')


export const whois = () => {
    if (localStorage.getItem("token")) {
        const userLogged = jwt_decode(localStorage.getItem("token"));
        return (userLogged);
    }
}

export const getDateFormat = (date) => {
    return format(Date.parse(date), "dd 'de' MMMM yy p aaaa", {
        locale: es
    })
}

export const getDateFormatAdmin = (date) => {
    return format(Date.parse(date), "P p aaaa", {
        locale: es
    })
}

export const logout = () => {
    if (localStorage.getItem("token")) {
        localStorage.removeItem("token")
        console.log('SocialMedic - Log out');
    }
}