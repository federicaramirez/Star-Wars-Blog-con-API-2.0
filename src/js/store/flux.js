import axios from "axios";

const getState = ({getStore, getActions, setStore}) => {

    return {
        store: {
            objetoPersonas: [],
            objetoPlanetas: [],
            objetoVehiculos: [],
            favorite: [],

            // id particulares
            unaPersona: {},
            unPlaneta: {},
            unVehiculo: {},

            auth: false
        },


        actions: {

            singIn: async (name, email, password) => {
                try{

                    const response = await axios.post('https://3000-federicaram-buildastarw-l1shaiv8gw7.ws-us72.gitpod.io/user', {
                        "name": name,
                        "email": email,
                        "password": password,
                        "is_active": "True"
                    })
                    console.log(response)

                }catch(error){
                    if(error.code === "ERR_BAD_REQUEST"){
                        alert(error.response?.data?.msg)
                    }
                }
            },


            //Llamada a la API backend para login comprobando si existe usuario
            loginBack: async(email,password) => {
                console.log(email,password)

                try{
                    const response = await fetch('https://3000-federicaram-buildastarw-l1shaiv8gw7.ws-us72.gitpod.io/login', {
                        method: "POST",
                        body: JSON.stringify({
                            email: email,
                            password: password
                        }),
                        headers : {
                            'Content-type': 'application/json'
                        }
                    }) 
                    if(response.status === 200){
                        const data = await response.json()
                        console.log(data)

                        //Guardar en el navegador
                        localStorage.setItem("token", data.access_token)
                        setStore({auth: true})
                    } else {
                        alert("Wrong email or password")
                    }
                    
                } catch(err){ console.log(err);}
            },

                //Remover el token para cerrar sesion
            singOf: () => {
                localStorage.removeItem("token")
                setStore({auth: false})
            },


            // Llamado a personas
            llamarAppiPersonas: () => {
                fetch("https://www.swapi.tech/api/people").then((response) => response.json()).then((data) => setStore({objetoPersonas: data.results}))
            },

            // Llamado planetas
            llamarAppiPlanetas: () => {
                fetch("https://www.swapi.tech/api/planets").then((response) => response.json()).then((data) => setStore({objetoPlanetas: data.results}))
            },

            // Llamado vehiculos
            llamarAppiVehiculos: () => {
                fetch("https://www.swapi.tech/api/vehicles").then((response) => response.json()).then((data) => setStore({objetoVehiculos: data.results}))
            },

            llamarapiPersona: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id).then((response) => response.json()).then((data) => setStore({unaPersona: data.result}))
            },

            llamarAppiPlaneta: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id).then((response) => response.json()).then((data) => setStore({unPlaneta: data.result}))
            },

            llamarAppiVehiculo: (id) => {
                fetch("https://www.swapi.tech/api/vehicles/" + id).then((response) => response.json()).then((data) => setStore({unVehiculo: data.result}))
            },
			 

			DelFavorite: (pfavorite) => {
				const store = getStore()
				setStore({
					favorite: [...store.favorite.filter((item => item !== pfavorite))]
				})
			},

            funFavorites: (pfavorite) => {
                const store = getStore()
                const actions = getActions()
                if (store.favorite.includes(pfavorite)) { 
					// elimina
                    actions.DelFavorite(pfavorite)
                } else {
                    setStore({
                        favorite: [
                            ... store.favorite,pfavorite]
                    })
                }


            }

        }
    }
}

export default getState;
