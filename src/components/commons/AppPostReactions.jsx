import React from "react";

import Icons from "./icons";

import Styles from "./AppPostReactions.module.css";

const AppPostReactions = props => {

    return (
        <React.Fragment>
            {/* Reactions */}
            <div className={`${Styles.Reactions}`}>
                <div className={`${Styles.ReactionsWrapper}`}>
                    <a href="#">
                        <Icons value="likes" />
                        <span>10</span><span className={`${Styles.ReactionsText}`}>Likes</span>
                    </a>
                    <a href="#">
                        <Icons value="comments" />
                        <span>6</span><span className={`${Styles.ReactionsText}`}>Comments</span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );        
}

export default AppPostReactions;