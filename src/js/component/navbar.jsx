import React, { useContext, useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext";


export const Navbar = () => {
    let {store, action}= useContext(Context)
    
    const screenList = store?.favorite.map((item)=>{
      return (
        <div key={item}>
          <li className="text-info ms-3 my-1">{item}</li> 
          </div>
      )

    });

    return (
    <nav className="navbar bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img alt="Logo" width="50" height="60"
                    src={"https://cdn.worldvectorlogo.com/logos/star-wars-2.svg"}></img>
            </Link>
            <button className="navbar-toggler btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span className="navbar-toggler-icon btn-warning" ></span>
            </button>
            <div className="offcanvas offcanvas-end bg-light" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Favoritos</h5>
        <button type="button" class="btn-close btn-close-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
                <div className="ml-auto nav-item dropdown">        
            <ul className="dropdown-menu-dark">{screenList}</ul>
            </div>
            </div>
        </div>
    </nav>);
};

export default Navbar;