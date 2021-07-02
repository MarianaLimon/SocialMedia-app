import React from "react";

import Icons from "./icons";

// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import AppImage from "./AppImage";

import Styles from "./AppCard.module.css"

import banner from "../../img/card/banner.jpg"
import author from "../../img/card/author.jpg"

export default function AppCard() {

  return (
    <React.Fragment>


    <article className="card mb-3 nav-view-post">

        <AppImage classImage={`${Styles.CardImage} w-100`} pathImage={banner} altImage="banner-img"></AppImage>

        <div className="card-body">

            {/* Title */}
            <h2 className={`${Styles.CardTitle}`}>
                <a href="#">Title</a>
            </h2>

            {/* Tags */}
            <div className={`${Styles.Tags} tags-color d-flex flex-wrap`}> #webdev #wordpress #frontend #tutorial </div>

            {/* Author Wrapper */}
            <div className={`${Styles.AuthorWrapper}`}>
                <AppImage classImage="avatar" pathImage={author} altImage="author-img"></AppImage>

                <div className={`${Styles.AuthorName}`}>
                    <div>Name</div>
                    <div>Creation date</div>
                </div>
            </div>

            {/* Reactions */}
            <div className={`${Styles.Reactions}`}>
                <div className={`${Styles.ReactionsWrapper}`}>
                    <a href="#">
                        <Icons value="likes" />
                        <span>10 </span><span className="react-text"> &nbsp;Likes</span>
                    </a>
                    <a href="#">
                        <Icons value="comments" />
                        <span className="react-text">6 Comments</span>
                    </a>
                </div>
            </div>
        </div>
    </article>

    <article className="card mb-3 nav-view-post">

        <AppImage classImage={`${Styles.CardImage} w-100`} pathImage={banner} altImage="banner-img"></AppImage>

        <div className="card-body">

            {/* Title */}
            <h2 className={`${Styles.CardTitle}`}>
                <a href="#">Title</a>
            </h2>

            {/* Tags */}
            <div className={`${Styles.Tags} tags-color d-flex flex-wrap`}> #webdev #wordpress #frontend #tutorial </div>

            {/* Author Wrapper */}
            <div className={`${Styles.AuthorWrapper}`}>
                <AppImage classImage="avatar" pathImage={author} altImage="author-img"></AppImage>

                <div className={`${Styles.AuthorName}`}>
                    <div>Name</div>
                    <div>Creation date</div>
                </div>
            </div>

            {/* Reactions */}
            <div className={`${Styles.Reactions}`}>
                <div className={`${Styles.ReactionsWrapper}`}>
                    <a href="#">
                        <Icons value="likes" />
                        <span>10 </span><span className="react-text"> &nbsp;Likes</span>
                    </a>
                    <a href="#">
                        <Icons value="comments" />
                        <span className="react-text">6 Comments</span>
                    </a>
                </div>
            </div>
        </div>
    </article>

    </React.Fragment>
  );
}
