import React from "react";

// import AppCheckboxFilter from "../components/commons/AppCheckboxFilter";
import AppImage from "../components/commons/AppImage";
import AppInput from "../components/commons/AppInput";

import banner from "../img/card/banner.jpg"
import author from "../img/card/author.jpg"

export default function Home() {

  return (
    <React.Fragment>


    <article className="card mb-3 nav-view-post">

        <AppImage className="card-img-top w-100" src={banner} alt="card-img"></AppImage>

        <AppInput type="password"/>

        <div className="card-body">
          <div className="autor">

            <img className="rounded-circle border border-secondary ico-profile" src={author} />

            <div className="autor-name">
              <div>Name</div>
              <div>Creation date</div>
            </div>
          </div>
          <div>
            <h2 className="card-title feature">
              <a href="#">Title</a>
            </h2>
          </div>
          <div className="tags tags-color d-flex flex-wrap">tags</div>

          <div className="reacts">
            <div className="react-left">
              <a href="#">
                <img src="images/single/reaction-heart.svg" />
                <span>10 </span><span className="react-text"> &nbsp;reactions</span>
              </a>
              <a href="#">
                <img src="images/single/comentario.svg" className=""/>
                <span className="react-text">6 comments</span>
              </a>
            </div>
            
            <div className="react-right">
              <span>4 min read</span>
              <button>Save</button>

            </div>
          </div>
        </div>
    </article>



            



    </React.Fragment>
  );
}
