const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			objetoPersonas : [],
			unaPersona: {},
			objetoPlanetas : [],
			unPlaneta: {}

		},
		actions: {
			
			//Llamado a personas
 llamarAppiPersonas : async () => {
	fetch("https://www.swapi.tech/api/people")
	.then((response)=>response.json())
	.then((data)=>setStore({llamarAppiPersonas : data.results}))
}, 

//Llamado planetas
llamarAppiPlanetas : async () => {
	fetch("https://www.swapi.tech/api/planets")
	.then((response)=>response.json())
	.then((data)=>setStore({llamarAppiPlanetas : data.results}))


		}
	}}
}
export default getState;

