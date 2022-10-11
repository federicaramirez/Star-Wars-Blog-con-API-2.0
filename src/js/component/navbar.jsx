import React from "react";
import {Link} from "react-router-dom";


// export const Navbar = () => {
// //         return(< nav classNameName = "navbar navbar-light bg-light mb-3" > <Link to = "/"> 
{/* < img src = {"https://cdn.worldvectorlogo.com/logos/star-wars-2.svg"} */}
//         }
//         alt = "Logo" width = "50" height = "30" className = "d-inline-block align-text-top" / > </Link>< div classNameName = "ml-auto" > < Link to = "/demo" > < button classNameName = "btn btn-primary" > Check the Context in action < /button> < /
//         Link > < /div> < /
//         nav >
//     );
// };

export const Navbar= () => { 
    return ( 
        <nav className="navbar bg-light fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img alt = "Logo" width = "30" height = "30" src={"https://cdn.worldvectorlogo.com/logos/star-wars-2.svg"} ></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
      <Link className="btn btn-outline-success" to="/">Favoritos</Link>
      </div>
    </div>
  </div>
</nav>
    ); 
};