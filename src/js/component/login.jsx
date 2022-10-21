import React, { useContext, useState, useEffect } from "react";
import {Link, useHistory} from "react-router-dom";
import {Context} from "../store/appContext";


const Login = () => { 

    //Definir estados
    const [guardadoEmail, setGuardadoEmail]=useState("")
    const [guardadoPassword, setGuardadoPassword]=useState("")

    const {actions,store} = useContext(Context)
    const history = useHistory()

//Prevenir el envio
    function inputFunction(e) {
        if (e.key == 'Enter') {
            // conectar al backend
            actions.loginBack(guardadoEmail,guardadoPassword)
            setTimeout(() => {
                if(store.auth === true){
                    history.push("/")
                }
            }, 1000 ) 
    
            setGuardadoEmail("")
            setGuardadoPassword("")
        } 
    }

    function sumbit() {
        // conectar al backend
        actions.loginBack(guardadoEmail,guardadoPassword)
        
        setTimeout(() => {
            if(store.auth === true){
                history.push("/")
            }
        }, 1000 ) 

        setGuardadoEmail("")
        setGuardadoPassword("")
    }

return (
    <>
    <div className="content-center mb-6 mx-3">
  <div className="mb-3 text-light" >
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setGuardadoEmail(e.target.value)} value={guardadoEmail} onKeyDown={inputFunction}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div className="mb-3 text-light">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=> setGuardadoPassword(e.target.value)} value={guardadoPassword} onKeyDown={inputFunction}/>
  </div>
  <div>
  <button className="btn btn-primary mx-2" onClick={sumbit}>Login</button>
     <Link className="btn btn-outline-light mx-2" type="submit" to="/signup">Sing up</Link>
     </div>
 

</div>
</>
)
}


export default Login;