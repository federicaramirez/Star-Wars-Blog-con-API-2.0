import React from "react";
import "../../styles/home.css";
import Cuerpo from "../component/cuerpo.jsx";
import { useEffect, useState } from "react";

const Home = () => {
	
	const [apiDate, setApiDate] = useState()
	const [apiDatePersonas, setApiDatePersonas] = useState()

	//Llamado a la api
	const llamarappi= async () => {
	try{ 
		const response = await fetch("https://www.swapi.tech/api/")

		const data = await response.json() 
		setApiDate(data)}  
		
	catch(err){
		console.log(err) }
}


console.log(apiDate);

//Llamado a personas
const llamarAppiPersonas= async () => {
	try{ 
		const response = await fetch(apiDate.result.people)

		const data = await response.json() 
		setApiDatePersonas(data.results)}  
		
	catch(err){
		console.log(err) }
}

useEffect(()=> {
	llamarappi()
}, []
)

useEffect(() =>{ 
	llamarAppiPersonas()
}, [apiDate])

console.log(apiDatePersonas);

return(
<> 
	<br />
	<div className="mt-5 container">
		
	<div>	<Cuerpo title="People" />
		<br /></div>

		<div><Cuerpo title="Planets" />
		<br /> </div>

		{/* <Cuerpo title="Vehicles" />
		<br /> */}
		
	</div>
	</>
	)
};

export default Home;
