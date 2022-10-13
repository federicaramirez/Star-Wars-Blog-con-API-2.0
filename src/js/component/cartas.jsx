import React, { useContext } from "react";
import {Link} from "react-router-dom"
import {useState, useEffect} from "react";
import { Context } from "../store/appContext";




const Cartas = (props) => {

    let {store, actions} = useContext(Context)

    const [apiImagenes, setApiImagenes] = useState()

    let apiIMG = (linkUno, linkDos)=>{
        fetch("https://starwars-visualguide.com/assets/img/"+ linkUno +"/"+ linkDos +".jpg")
        .then((response)=>response)
        .then((data)=>setApiImagenes(data))
    }

    const [marcarFav, setMarcarFav] = useState("text-light")
const pressFav = () => {
    if(marcarFav === "text-light"){
        setMarcarFav("text-danger")
    } else {
        setMarcarFav("text-light")
    }
}

    let [subDom, setSubDom] = useState ("")

    useEffect(()=>{

        if (props.title == "People") {
            setSubDom("personas/")
            apiIMG("characters", props.uid)

        } else if(props.title == "Planets"){

            setSubDom("planetas/")
            apiIMG("planets", props.uid)}
        
        else if(props.title == "Vehicles"){

            setSubDom("vehiculos/")
            apiIMG("vehicles", props.uid)

    }}, [])


    return (<div className="mx-3" style={{width:"18rem", background:"#2C3A47"}}  >
        <img src={apiImagenes?.url} className="card-img-top" alt="..." style={{width:"18rem"}}/>
        <div className="card-body text-light">
            <h5 className="card-title ">{props.name}</h5>
            <p className="card-text">info</p>
            
            <div className= "d-flex justify-content-between" >
            <Link to={"/leermas/" + subDom + props.uid} className="btn btn-primary">Leer mas...</Link>
            <Link to="/" className="btn btn-warning" onClick={pressFav}><i className={"fa fa-heart "+ marcarFav}/></Link>
            </div>
        </div>
    </div>)
};


export default Cartas;
