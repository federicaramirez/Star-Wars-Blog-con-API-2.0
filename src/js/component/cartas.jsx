import React from "react";
import {Link} from "react-router-dom"
import {useState} from "react";





const Cartas = (props) => {

    const [marcarFav, setMarcarFav] = useState("text-light")
const pressFav = () => {
    if(marcarFav === "text-light"){
        setMarcarFav("text-danger")
    } else {
        setMarcarFav("text-light")
    }
}

    return (<div className="mx-3" style={{width:"18rem"}} >
        <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" className="card-img-top" alt="..." style={{width:"18rem"}}/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">info</p>
            
            <div className= "d-flex justify-content-between" >
            <Link to="/" className="btn btn-primary">Leer mas...</Link>
            <Link to="/" className="btn btn-warning" onClick={pressFav}><i className={"fa fa-heart "+ marcarFav}/></Link>
            </div>
        </div>
    </div>)
};


export default Cartas;
