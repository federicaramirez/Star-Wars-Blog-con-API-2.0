const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			objetoPersonas : [],
			objetoPlanetas : [],
			objetoVehiculos: [], 	
			Favorites: [],
			
			//id particulares
			unaPersona: {},
			unPlaneta: {},
			unVehiculo: {}
		},
		
			

			actions: {
			
			//Llamado a personas
 llamarAppiPersonas : () => {
	fetch("https://www.swapi.tech/api/people")
	.then((response)=>response.json())
	.then((data)=>setStore({objetoPersonas : data.results}))
}, 

//Llamado planetas
llamarAppiPlanetas : () => {
	fetch("https://www.swapi.tech/api/planets")
	.then((response)=>response.json())
	.then((data)=>setStore({objetoPlanetas : data.results}))
}, 

//Llamado vehiculos
llamarAppiVehiculos : () => {
	fetch("https://www.swapi.tech/api/vehicles")
	.then((response)=>response.json())
	.then((data)=>setStore({objetoVehiculos : data.results}))
		},

llamarapiPersona : (id) => {
	fetch("https://www.swapi.tech/api/people"+id)
	.then((response)=>response.json())
	.then((data)=>setStore({unaPersona : data.results}))
		},
		
llamarAppiPlaneta : (id) => {
	fetch("https://www.swapi.tech/api/planets"+id)
	.then((response)=>response.json())
	.then((data)=>setStore({unPlaneta : data.results}))
		},

llamarAppiVehiculos : (id) => {
fetch("https://www.swapi.tech/api/vehicles"+id)
.then((response)=>response.json())
.then((data)=>setStore({unVehiculo : data.results}))
				},

}
	}
		}

export default getState;

