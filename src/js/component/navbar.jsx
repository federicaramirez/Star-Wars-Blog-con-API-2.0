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
    <Link className="navbar-brand" to="#"><img alt = "Logo" width = "30" height = "30" src={"https://cdn.worldvectorlogo.com/logos/star-wars-2.svg"} ></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Favoritos
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">Action</Link></li>
              <li><Link className="dropdown-item" to="#">Another action</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><Link className="dropdown-item" to="#">Todos</Link></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    ); 
};