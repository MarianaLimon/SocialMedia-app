import React, { useEffect, useState } from "react";
import AppImage from '../components/commons/AppImage'
import MenuHamburger from "../components/Header/MenuHamburger";
import {
    getArticles,
    getArticleById,
    postArticle,
    patchArticle,
    deleteArticle
} from "../services/articles";
import { getProfessionalLicense } from "../services/sep"
export default function Test() {
    const [institucion, setInstitucion] = useState()
    useEffect(() => {
        async function professionalLicense() {
            const json = await getProfessionalLicense("0083346");
            setInstitucion(json.items[0].desins)
            console.log(json)
        }
        professionalLicense()
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZTI4YTU3ZmFkYWU3NWY0Yzg1MjIzNiIsImlhdCI6MTYyNTQ1OTM1NSwiZXhwIjoxNjI1NTQ1NzU1fQ.IMPeZzG09c2pG4IJ7mtADXXRvvlfPrfOEEjGbbi1j6g"
        localStorage.setItem("token", token);
        async function articleById() {
            const id = "60df437a30f1bb441c59569b"
            const json = await getArticleById(id);
            console.log(json)
        }
        //articleById()

        async function articles() {

            const json = await getArticles();
            console.log(json)
        }
        //articles()
        async function postArticles() {
            const tags = ["salud femenina", "sobrepeso"]
            const title = "Mi artículo"
            const image = "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
            const content = "Este es mi contenido nuevo"
            const user_id = "60dfa499b9a79a247832c368"
            const category_id = "60de8c62d4d9ec05d82e466a"
            const status = "enabled";

            const newArticle = {
                tags, title, image, content, user_id, category_id, status
            };

            const json = await postArticle(newArticle);
            if (!json.success) {
                //mostrar error
                //console.log("Ocurrió un error al postear")
            }
            console.log(json.success)
        }
        //postArticles()
        async function patchArticles() {
            const id = "60e28ade64d6e8000cfcc005"
            const title = "este es un update del titulo"
            const user_id = "60dfa499b9a79a247832c368"
            const aArticle = {
                title,
                user_id
            }
            const json = await patchArticle(id, aArticle);
            console.log(json)
        }
        //patchArticles();
        async function deletedArticles() {
            const id = "60e28ade64d6e8000cfcc005"

            const json = await deleteArticle(id);
            console.log(json)
        }
        //deletedArticles()





    }
    )
    return (
        <React.Fragment>
            <MenuHamburger />
            {institucion}
        </React.Fragment>
    )
}