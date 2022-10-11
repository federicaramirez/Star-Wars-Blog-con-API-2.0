import React from "react";
import {Link} from "react-router-dom"
import {useState} from "react";





const Cartas = () => {

    const [marcarFav, setMarcarFav] = useState("text-light")
const pressFav = () => {
    if(marcarFav === "text-light"){
        setMarcarFav("text-danger")
    } else {
        setMarcarFav("text-light")
    }
}

    return (<div className="card mx-3" style={{width:"18rem"}} >
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <div className= "d-flex justify-content-between" >
            <Link to="/" className="btn btn-primary">Leer mas...</Link>
            <Link to="/" className="btn btn-warning" onClick={pressFav}><i className={"fa fa-heart "+ marcarFav}/></Link>
            </div>
        </div>
    </div>)
};


export default Cartas;
