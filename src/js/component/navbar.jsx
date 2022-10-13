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
        <nav className="navbar bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img alt = "Logo" width = "50" height = "60" src={"https://cdn.worldvectorlogo.com/logos/star-wars-2.svg"} ></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link className="dropdown-item" href="#">Action</Link></li>
              <li><Link className="dropdown-item" href="#">Another action</Link></li>
              <li><Link className="dropdown-item" href="#">Something else here</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    ); 
};