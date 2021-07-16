import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useLocation } from "react-router";
import "./index.css"

export default function Filter(props) {

    const handleChecked = e => {
        const cat = props.categories[e.target.dataset.id];
        let newCheckedValues = props.checkedValues.filter(item => item !== cat);
        if (e.target.checked) newCheckedValues.push(cat);
        props.setCheckedValues(newCheckedValues);
    }


    return (
        <React.Fragment>
            <div>
                <h3>Categorías</h3>
                <div className="CheckboxComponent d-flex flex-column">
                    {props.categories.map((cat, id) => (
                        <label key={id}>
                            <input type="checkbox" data-id={id} onClick={handleChecked} className="form-check-input" /> {cat}
                        </label>
                    ))}
                    <hr />
                    <h3>Filtros</h3>
                    <p>{props.checkedValues.join(", ")}</p>
                </div>
            </div>
        </React.Fragment>
    );
}