import React, {useContext, useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {Context} from "../store/appContext";


const Register = () => { // Definir estados
    const [guardadoName, setGuardadoName] = useState("")
    const [guardadoEmail, setGuardadoEmail] = useState("")
    const [guardadoPassword, setGuardadoPassword] = useState("")

    const {actions} = useContext(Context)
    const history = useHistory()

    // Prevenir el envio
    function inputFunction(e) {
        if (e.key == 'Enter') { // conectar al backend
            actions.singIn(guardadoName, guardadoEmail, guardadoPassword)
            history.push("/login")
        }
    }

    function sumbit() { // conectar al backend
        actions.singIn(guardadoName,guardadoEmail, guardadoPassword)
        history.push("/login")
        setGuardadoEmail("")
        setGuardadoPassword("")
        setGuardadoName("")
    }

    return (
        <>
            <div className="content-center mb-6">
                <div className="mb-3 text-light">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                        onChange={
                            (e) => setGuardadoName(e.target.value)
                        }
                        value={guardadoName}
                        onKeyDown={inputFunction}/>
                </div>
                <div className="mb-3 text-light">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={
                            (e) => setGuardadoEmail(e.target.value)
                        }
                        value={guardadoEmail}
                        onKeyDown={inputFunction}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 text-light">
                    <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                    <input type="password" className="form-control" id="exampleInputPas"
                        onChange={
                            (e) => setGuardadoPassword(e.target.value)
                        }
                        value={guardadoPassword}
                        onKeyDown={inputFunction}/>
                </div>
                <div>
                    <button className="btn btn-primary"
                        onClick={sumbit}>Submit</button>
                </div>


            </div>
        </>
    )
}


export default Register;
