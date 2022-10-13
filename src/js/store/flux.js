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
            unVehiculo: {}
        },


        actions: {

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

            funFavorites: (pfavorite) => {
                const store = getStore()
                const actions = getActions()
                if (store.favorite.incluides(pfavorite)) { 
					// elimina
                    actions.DelFavorite(pfavorite)
                } else {
                    setStore({
                        favorite: [
                            ... store.favorite,pfavorite]
                    })
                }


            },

			DelFavorite: (pfavorite) => {
				const store = getStore()
				setStore({
					favorite: [...store.favorite.filter((item => item !== pfavorite))]
				})
			}, 


        }
    }
}

export default getState;
