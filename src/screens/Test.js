import React, { useEffect } from "react";
import AppImage from '../components/commons/AppImage'
import MenuHamburger from "../components/Header/MenuHamburger";
import {
    getArticles,
    getArticleById,
    postArticle,
    patchArticle,
    deleteArticle
} from "../services/articles";

export default function Test() {
    useEffect(() => {
        async function articleById() {
            const id = "60d2bb6287a4c540600d08e8"
            const json = await getArticleById(id);
            console.log(json)
        }

        async function articles() {

            const json = await getArticles();
            console.log(json)
        }
        async function postArticles() {
            const tags = ["salud femenina", "sobrepeso"]
            const title = "Nuevo artículo"
            const image = "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
            const content = "Este es mi contenido nuevo"
            const user_id = "60d2bdf6090aef66fc63e1b3"
            const category_id = "asdasdasd"
            const status = "enabled";

            const newArticle = {
                tags, title, image, content, user_id, category_id, status
            };

            const json = await postArticle(newArticle);
            console.log(json)
        }

        async function patchArticles() {
            const id = "60de3301dbfef76be432b1ea"
            const title = "este es un update del titulo"
            const aArticle = {
                title
            }
            const json = await patchArticle(id, aArticle);
            console.log(json)
        }
        async function deletedArticles() {
            const id = "60de3301dbfef76be432b1ea"

            const json = await deleteArticle(id);
            console.log(json)
        }





    }
    )
    return (
        <React.Fragment>
            <MenuHamburger />

        </React.Fragment>
    )
}