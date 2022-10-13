import React from "react";
import "../../styles/home.css";
import {Link} from "react-router-dom"
import Cartas from "../component/cartas.jsx";

const Cuerpo = (props) => {
    
    //mapa de cartas
    const mapObjetos = props.obj.map((item, index)=>{
        return <Cartas key={index} name={item.name} uid={item.uid} title={props.title} />
    })
    
    return (
       <> 
       <h2 className="mx-4 text-light">{props.title}</h2>
       
        <pre className="d-flex mx-3 chroma"> 
        {mapObjetos}
         </pre>
        </>
    )
}


export default Cuerpo;
