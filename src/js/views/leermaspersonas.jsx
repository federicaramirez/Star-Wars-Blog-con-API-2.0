import React, {useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const LeermasPersonas = () => {

    const { store, actions } = useContext(Context);
	const params = useParams();

    //Botones recorrer
    const [next, setNext] = useState("")
    const [down, setDown] = useState("")

    const [apiImagenes, setApiImagenes] = useState()

    let apiIMG = (linkDos)=>{
        fetch("https://starwars-visualguide.com/assets/img/characters/"+ linkDos +".jpg")
        .then((response)=>response)
        .then((data)=>setApiImagenes(data))
    }
    
    useEffect(()=>{
        actions.llamarapiPersona(params.theid)
        apiIMG(params.theid)

        setDown(String(Number(params.theid)-1))
        setNext(String(Number(params.theid)+1))
    }, [params.theid] )

    
 return( <>
 <br />
 <div className= "d-flex container"> 
    <img src="https://i.blogs.es/05d040/espinof-star-wars-jarjarbinks/840_560.jpg" style={{maxHeight:"350px", maxWidth:"500px"}} />
    <div className="d-flex flex-column align-items-center" style={{width:"100%"}}>
        <h2 className="tex-muted"> </h2>
        <p>info</p>
    </div>
 </div>
 
 
 </>)

}


export default LeermasPersonas; 