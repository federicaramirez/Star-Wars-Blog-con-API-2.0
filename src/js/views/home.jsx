import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar.jsx";


const Home = () => {
	
	const llamarappi= async () => {
	try{ 
		const response = await fetch("https://www.swapi.tech/api/")

		const data = await response.json() 
	console.log(data)}  
catch(err){
	console.log(err) }
}


<> <Navbar/> 
	<br />
	<div className="text-center mt-5">
		
		<h1>Soy el cuerpo</h1>
		
	</div>
	</>
};

export default Home;
