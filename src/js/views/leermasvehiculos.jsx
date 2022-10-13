import React, {useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const LeermasVehiculos = () => {

    const { store, actions } = useContext(Context);
	const params = useParams();

 return( <>
 <br />
 <div className= "d-flex container"> 
    <img src="https://i.blogs.es/05d040/espinof-star-wars-jarjarbinks/840_560.jpg" style={{maxHeight:"350px", maxWidth:"500px"}} />
    <div className="d-flex flex-column align-items-center" style={{width:"100%"}}>
        <h2> tituloVehiculos</h2>
        <p>info</p>
    </div>
 </div>
 
 </>)

}


export default LeermasVehiculos; 