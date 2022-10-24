import "../../styles/home.css";
import React from "react"

import Register from "../component/register.jsx";

const CreateUser = () => {

    return (
        <>
        <br />
        <div style={{width: '100%'}} className="d-flex justify-content-center">
        <div className="card bg-dark mb-6 d-flex" >
        <h1 className="text-light">Rigister</h1>
        <Register />
        </div>
        </div>
        </>
    )

}

export default CreateUser;