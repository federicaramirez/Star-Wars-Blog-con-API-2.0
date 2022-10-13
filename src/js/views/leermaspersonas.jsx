import React, {useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const LeermasPersonas = () => {

    const { store, actions } = useContext(Context);
	const params = useParams();

    //Botones recorrer
    const [next, setNext] = useState("")
    const [down, setDown] = useState("")

    const [apiImagenes, setApiImagenes] = useState()

    
    useEffect(()=>{
        actions.llamarapiPersona(params.theid)

        setDown(String(Number(params.theid)-1))
        setNext(String(Number(params.theid)+1))
    }, [params.theid] )

    
 return( <>
 <br />
 <div className= "d-flex container"> 
    <img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} style={{maxHeight:"350px", maxWidth:"500px"}} />
    <div className="d-flex flex-column align-items-center text-light" style={{width:"100%"}}>
        <h2 className="tex-muted">{store.unaPersona?.properties?.name} </h2>
        <p>{store.unaPersona?.description}</p>
    </div>
    </div>
    <br />
    <div className="container text-center text-secondary">
            <div className="row">
                <div className="col">
                    Name
                </div>
                <div className="col">
                    Birth Year
                </div>
                <div className="col">
                    Gender
                </div>
                <div className="col">
                    Height
                </div>
                <div className="col">
                    Skin Color
                </div>
                <div className="col">
                    Hair Color
                </div>
            </div>
        </div>

        <br />

        <div className="container text-center text-info">
            <div className="row">
                <div className="col">
                    {store.unaPersona?.properties?.name}
                </div>
                <div className="col">
                    {store.unaPersona?.properties?.birth_year}
                </div>
                <div className="col">
                    {store.unaPersona?.properties?.gender}
                </div>
                <div className="col">
                    {store.unaPersona?.properties?.height}
                </div>
                <div className="col">
                    {store.unaPersona?.properties?.skin_color}
                </div>
                <div className="col">
                    {store.unaPersona?.properties?.hair_color}
                </div>
            </div>
        </div>

        <br />
 
    <div className="d-flex justify-content-end " role="group" aria-label="Basic outlined example">
 <Link to={"/leermas/personas/"+down}> 
  <button className="btn btn-outline-primary">Down</button>
 </Link>
  <button className="btn btn-outline-primary"><i className="fa fa-heart text-danger" /></button>
  <Link to={"/leermas/personas/"+next}> 
  <button className="btn btn-outline-primary">Next</button>
  </Link>
</div>
 
 
 </>)

}


export default LeermasPersonas; 