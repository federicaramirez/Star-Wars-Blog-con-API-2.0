import React, { useContext } from "react";
import "../../styles/home.css";
import Cuerpo from "../component/cuerpo.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Home = () => {
	
	let {store, actions} = useContext(Context)

	const [visibilidadBoton, setVisibilidadBoton] = useState("show")
//invisibilidad boton
  useEffect(()=>{
    if (store.auth === true){
      setVisibilidadBoton("show")
    } else{
      setVisibilidadBoton("hidden")
    }
  })

return(
<> 
	<br />
	 <div><Link type="button" className={"btn btn-outline-link "+visibilidadBoton} to="/settings" >Settings</Link></div>
	<div className="mt-5 container">
		
	<div>	<Cuerpo title="People" obj={store.objetoPersonas} />
		<br /></div>

		<div><Cuerpo title="Planets" obj={store.objetoPlanetas} />
		<br /> </div>

		<div><Cuerpo title="Vehicles" obj={store.objetoVehiculos} />
		<br />
		</div>
	</div>
	</>
	)
}


export default Home;
