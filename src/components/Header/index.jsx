import React, { useEffect, useState } from "react";

import Logo from "./Logo";
import AppImage from "../commons/AppImage";
import jwt_decode from "jwt-decode";
import { getUserById } from "../../services/users"
import Hamburger from "./MenuHamburger"
import { useHistory, useLocation } from "react-router";

import "./index.css";

export default function Header() {
    const [login, setLogin] = useState(false)
    const [menuAdmin, setMenuAdmin] = useState(false)
    const [urlHome, setUrlHome] = useState("")
    const [roleDoctor, setRoleDoctor] = useState(false)
    const [roleAdmin, setRoleAdmin] = useState(false)


    const [avatar, setAvatar] = useState("")
    const history = useHistory();
    const location = useLocation();

    const routesAdmin = ["homeadmin", "articles-admin", "webinars-admin", "products-admin", "users", "user-validate", "product-detail", "add-article", "add-product", "add-webinar", "test", "modal"]
    const routesMedico = ["home", "profile", "products", "product-detail", "webinars", "webinar-detail", "articles", "article-detail", "test", "modal"]
    const routesFree = ["/register", "/tnksregister", "/"]



    const verifyExpirationToken = (decoded) => {
        const now = Date.now().valueOf() / 1000

        if ((typeof decoded.exp !== 'undefined' && decoded.exp < now)) {//expiro la fecha
            setMenuAdmin(false)
            setRoleDoctor(false)
            setRoleAdmin(false)
            setLogin(false)
            localStorage.removeItem("token")
            history.push("/")

        } else {
            return true
        }
    }


    useEffect(async () => {


        if (localStorage.getItem("token")) {
            const decoded = jwt_decode(localStorage.getItem("token"));
            const logged = await verifyExpirationToken(decoded)

            if (logged) {

                setLogin(true)


                if (decoded.role[0] === "medico") {
                    setRoleDoctor(true)
                    setRoleAdmin(false)
                    setMenuAdmin(false)
                    setUrlHome("/home")
                    const found = routesMedico.find(path => path === location.pathname.split("/")[1])
                    if (!found) {
                        history.push(urlHome)
                    }
                }
                if (decoded.role[0] === "admin") {
                    setRoleDoctor(false)
                    setRoleAdmin(true)
                    setMenuAdmin(true)
                    setUrlHome("/homeadmin")
                    const found = routesAdmin.find(path => path === location.pathname.split("/")[1])
                    if (!found) {
                        history.push(urlHome)
                    }
                }


                const user = await getUserById(decoded.id)

                setAvatar(user.avatar_url)

                const foundRouteLogin = routesFree.find(path => path === location.pathname)
                if (foundRouteLogin) {
                    decoded.role[0] === "admin" ? history.push("/homeadmin") : history.push("/home")
                }

            }
        } else {
            const foundRoute = routesFree.find(path => path === location.pathname)
            if (!foundRoute) {
                history.push("/")
            }
        }

    }, [])



    return (
        <nav className="header d-flex justify-content-between align-items-center">
            <div className={`aqui ${menuAdmin ? "d-block d-lg-none" : "d-none"}`}>
                <Hamburger />
            </div>
            <div className="logo-search d-flex justify-content-center align-items-center">
                <Logo url={urlHome} />
            </div>
            <div className="auth d-flex justify-content-center align-items-center">
                <AppImage
                    pathImage={avatar}
                    classImage={`avatar ${login ? "d-block" : "d-none"}`}
                    altImage="User Name"
                />
            </div>
        </nav>
    )
}
