import React, {useContext, useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const LeermasPlanetas = () => {

    const { store, actions } = useContext(Context);
	const params = useParams();

    //Botones recorrer
    const [next, setNext] = useState("")
    const [down, setDown] = useState("")

    const [apiImagenes, setApiImagenes] = useState()

    
    useEffect(()=>{
        actions.llamarAppiPlaneta(params.theid)

        setDown(String(Number(params.theid)-1))
        setNext(String(Number(params.theid)+1))
    }, [params.theid] )

    
 return( <>
 <br />
 <div className= "d-flex container"> 
    <img src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} style={{maxHeight:"350px", maxWidth:"500px"}} />
    <div className="d-flex flex-column align-items-center text-light" style={{width:"100%"}}>
        <h2 className="tex-muted">{store.unPlaneta?.properties?.name} </h2>
        <p>{store.unPlaneta?.description}</p>
    </div>
    </div>
    <br />
    <div className="container text-center text-secondary">
            <div className="row">
                <div className="col">
                Rotation period
                </div>
                <div className="col">
                    Diameter
                </div>
                <div className="col">
                Climate
                </div>
                <div className="col">
                Population
                </div>
                <div className="col">
                Orbital period
                </div>
                <div className="col">
                Gravity
                </div>
            </div>
        </div>

        <br />

        <div className="container text-center text-info">
            <div className="row">
                <div className="col">
                    {store.unPlaneta?.properties?.rotation_period}
                </div>
                <div className="col">
                    {store.unPlaneta?.properties?.diameter}
                </div>
                <div className="col">
                    {store.unPlaneta?.properties?.climate}
                </div>
                <div className="col">
                    {store.unPlaneta?.properties?.population}
                </div>
                <div className="col">
                    {store.unPlaneta?.properties?.orbital_period}
                </div>
                <div className="col">
                    {store.unPlaneta?.properties?.gravity}
                </div>
            </div>
        </div>

        <br />
 
    <div className="d-flex justify-content-end " role="group" aria-label="Basic outlined example">
 <Link to={"/leermas/planetas/"+down}> 
  <button className="btn btn-outline-primary">Down</button>
 </Link>
  <button className="btn btn-outline-primary"><i className="fa fa-heart text-danger" /></button>
  <Link to={"/leermas/planetas/"+next}> 
  <button className="btn btn-outline-primary">Next</button>
  </Link>
</div>
 
 
 </>)

};

export default LeermasPlanetas; 