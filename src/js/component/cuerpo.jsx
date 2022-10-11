import React from "react";
import "../../styles/home.css";
import {Link} from "react-router-dom"
import Cartas from "../component/cartas.jsx";

const Cuerpo = (props) => {
    return (
       <> 
       <h2 className="mx-4">{props.title}</h2>
        <div className="d-flex mx-3 "> 
        <Cartas />
         </div>
        </>
    )
}


export default Cuerpo;
