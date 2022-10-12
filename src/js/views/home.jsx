import React, { useContext } from "react";
import "../../styles/home.css";
import Cuerpo from "../component/cuerpo.jsx";
import { useEffect, useState } from "react";

import { Context } from "../store/appContext";

const Home = () => {
	
	let {store, actions} = useContext(Context)

return(
<> 
	<br />
	<div className="mt-5 container">
		
	<div>	<Cuerpo title="People" obj={store.llamarAppiPersonas} />
		<br /></div>

		<div><Cuerpo title="Planets" obj={store.llamarAppiPlanetas} />
		<br /> </div>

		{/* <Cuerpo title="Vehicles" />
		<br /> */}
		
	</div>
	</>
	)
}


export default Home;
