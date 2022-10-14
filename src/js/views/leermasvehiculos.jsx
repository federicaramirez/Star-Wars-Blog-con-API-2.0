import React, {useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const LeermasVehiculos = () => {

    const { store, actions } = useContext(Context);
	const params = useParams();

   //Botones recorrer
   const [next, setNext] = useState("")
   const [down, setDown] = useState("")

   const [apiImagenes, setApiImagenes] = useState()

   
   useEffect(()=>{
       actions.llamarAppiVehiculo(params.theid)

       setDown(String(Number(params.theid)-1))
       setNext(String(Number(params.theid)+1))
   }, [params.theid] )

   
return( <>
<br />
<div className= "d-flex container"> 
   <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`} style={{maxHeight:"350px", maxWidth:"500px"}} />
   <div className="d-flex flex-column align-items-center text-light" style={{width:"100%"}}>
       <h2 className="tex-muted">{store.unVehiculo?.properties?.name} </h2>
       <p>{store.unVehiculo?.films}</p>
   </div>
   </div>
   <br />
   <div className="container text-center text-secondary">
           <div className="row">
               <div className="col">
                   Model
               </div>
               <div className="col">
                   Vehicle class
               </div>
               <div className="col">
                   Credits
               </div>
               <div className="col">
                   Length
               </div>
               <div className="col">
                   Passangers
               </div>
               <div className="col">
                   Crew
               </div>
           </div>
       </div>

       <br />

       <div className="container text-center text-info">
           <div className="row">
               <div className="col">
                   {store.unVehiculo?.properties?.model}
               </div>
               <div className="col">
                   {store.unVehiculo?.properties?.vehicle_class}
               </div>
               <div className="col">
                   {store.unVehiculo?.properties?.cost_in_credits}
               </div>
               <div className="col">
                   {store.unVehiculo?.properties?.length}
               </div>
               <div className="col">
                   {store.unVehiculo?.properties?.passengers}
               </div>
               <div className="col">
                   {store.unVehiculo?.properties?.crew}
               </div>
           </div>
       </div>

       <br />

   <div className="d-flex justify-content-end " role="group" aria-label="Basic outlined example">
<Link to={"/leermas/vehiculos/"+down}> 
 <button className="btn btn-outline-primary">Down</button>
</Link>
 <button className="btn btn-outline-primary"><i className="fa fa-heart text-danger" /></button>
 <Link to={"/leermas/vehiculos/"+next}> 
 <button className="btn btn-outline-primary">Next</button>
 </Link>
</div>


</>)

};


export default LeermasVehiculos; 