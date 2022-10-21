import React, { useContext } from "react";
import "../../styles/home.css";
import Cuerpo from "../component/cuerpo.jsx";
import { useEffect, useState } from "react";

import { Context } from "../store/appContext";
import Login from "../component/login.jsx";

const Authentication = () => {

    return (
        <>
        <br />
        <div style={{width: '100%'}} className="d-flex justify-content-center">
        <div className="card bg-dark mb-6 d-flex" style={{width: '22rem'}}>
        <img alt="Login" width="600" height="300" className="card-img-top"
                    src={"https://i.blogs.es/69fdcc/star-wars-saga/450_1000.jpg"}></img>
        <Login />
        </div>
        </div>
        </>
    )

}

export default Authentication;