import React from "react";

import Styles from "./AppPostDateCreation.module.css";

const AppPostDateCreation = props => {

    return (
        <React.Fragment>
            {/* Publication Date */}
            <div className={`${props.cname} ${Styles.DateCreation}`} >
                <div>Publication date</div>                        
            </div>
        </React.Fragment>
    );        
}

export default AppPostDateCreation;


{/* 

    <AppPostDateCreation cname="alguna clase"/>   

*/}